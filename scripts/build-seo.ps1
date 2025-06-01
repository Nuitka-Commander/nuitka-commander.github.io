# SEO构建脚本 - PowerShell版本
# 用于构建带有预渲染的SEO优化版本

param(
    [string]$Mode = "production",
    [switch]$SkipInstall,
    [switch]$SkipPreview,
    [string]$Port = "4173"
)

Write-Host "🚀 开始SEO预渲染构建..." -ForegroundColor Green

# 检查Node.js和pnpm
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js版本: $nodeVersion" -ForegroundColor Green
    
    # 检查pnpm
    try {
        $pnpmVersion = pnpm --version
        Write-Host "✅ pnpm版本: $pnpmVersion" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ 未找到pnpm，正在检查npm..." -ForegroundColor Yellow
        $npmVersion = npm --version
        Write-Host "✅ npm版本: $npmVersion" -ForegroundColor Green
    }
}
catch {
    Write-Host "❌ 请确保已安装Node.js和pnpm(或npm)" -ForegroundColor Red
    exit 1
}

# 安装依赖
if (-not $SkipInstall) {
    Write-Host "📦 安装依赖..." -ForegroundColor Yellow
    try {
        # 优先使用pnpm
        if (Get-Command pnpm -ErrorAction SilentlyContinue) {
            pnpm install
        }
        else {
            npm install
        }
        Write-Host "✅ 依赖安装完成" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ 依赖安装失败: $_" -ForegroundColor Red
        exit 1
    }
}

# 清理之前的构建
Write-Host "🧹 清理构建目录..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
}

# 构建主应用
Write-Host "🔨 构建主应用..." -ForegroundColor Yellow
try {
    # 优先使用pnpm
    if (Get-Command pnpm -ErrorAction SilentlyContinue) {
        pnpm run build:website
    }
    else {
        npm run build:website
    }
    Write-Host "✅ 主应用构建完成" -ForegroundColor Green
}
catch {
    Write-Host "❌ 主应用构建失败: $_" -ForegroundColor Red
    exit 1
}

# 启动预览服务器进行预渲染
if (-not $SkipPreview) {
    Write-Host "🌐 启动预览服务器..." -ForegroundColor Yellow
    # 启动后台预览服务器
    $previewJob = Start-Job -ScriptBlock {
        param($Port)
        Set-Location $using:PWD
        # 优先使用pnpm
        if (Get-Command pnpm -ErrorAction SilentlyContinue) {
            pnpm vite preview --port $Port --host
        }
        else {
            npx vite preview --port $Port --host
        }
    } -ArgumentList $Port
    
    # 等待服务器启动
    Write-Host "⏳ 等待服务器启动..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    # 检查服务器是否启动成功
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$Port" -TimeoutSec 10
        Write-Host "✅ 预览服务器启动成功" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ 预览服务器启动失败" -ForegroundColor Red
        Stop-Job $previewJob
        Remove-Job $previewJob
        exit 1
    }
}

# 运行预渲染
Write-Host "🎭 开始预渲染..." -ForegroundColor Yellow
try {
    $env:ENABLE_PRERENDER = "true"
    $env:PREVIEW_PORT = $Port    
    # 优先使用pnpm
    if (Get-Command pnpm -ErrorAction SilentlyContinue) {
        pnpm run build:website:seo
    }
    else {
        npm run build:website:seo
    }
    
    Write-Host "✅ 预渲染完成" -ForegroundColor Green
}
catch {
    Write-Host "❌ 预渲染失败: $_" -ForegroundColor Red
    if ($previewJob) {
        Stop-Job $previewJob
        Remove-Job $previewJob
    }
    exit 1
}
finally {
    # 清理环境变量
    Remove-Item Env:ENABLE_PRERENDER -ErrorAction SilentlyContinue
    Remove-Item Env:PREVIEW_PORT -ErrorAction SilentlyContinue
}

# 停止预览服务器
if ($previewJob) {
    Write-Host "🛑 停止预览服务器..." -ForegroundColor Yellow
    Stop-Job $previewJob
    Remove-Job $previewJob
}

# 显示构建结果
Write-Host "`n📊 构建结果:" -ForegroundColor Cyan
Write-Host "主应用: dist/" -ForegroundColor Gray
Write-Host "静态页面: dist/static/" -ForegroundColor Gray

if (Test-Path "dist/static") {
    $staticPages = Get-ChildItem -Path "dist/static" -Recurse -Filter "*.html" | Measure-Object
    Write-Host "生成的静态页面数量: $($staticPages.Count)" -ForegroundColor Gray
}

if (Test-Path "dist/static/sitemap.xml") {
    Write-Host "✅ Sitemap已生成: dist/static/sitemap.xml" -ForegroundColor Green
}
else {
    Write-Host "⚠️  Sitemap未生成" -ForegroundColor Yellow
}

Write-Host "`n🎉 SEO构建完成!" -ForegroundColor Green
Write-Host "运行服务器: pnpm run serve" -ForegroundColor Cyan
Write-Host "开发服务器: pnpm run serve:dev" -ForegroundColor Cyan
