# SEO 功能测试脚本
# 用于测试客户端爬虫检测功能

Write-Host "🧪 开始SEO功能测试..." -ForegroundColor Green

# 检查必要文件是否存在
$requiredFiles = @(
    "scripts\client-crawler-detection.js",
    "server\crawler-detection.js",
    "plugins\vite-prerender.js"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "❌ 缺少文件: $file" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ 必要文件检查通过" -ForegroundColor Green

# 1. 构建SEO版本
Write-Host "`n📦 构建SEO版本..." -ForegroundColor Yellow
try {
    pnpm run build:website:seo
    if ($LASTEXITCODE -ne 0) {
        throw "构建失败"
    }
    Write-Host "✅ SEO构建完成" -ForegroundColor Green
}
catch {
    Write-Host "❌ SEO构建失败: $_" -ForegroundColor Red
    exit 1
}

# 2. 检查静态文件是否生成
Write-Host "`n🔍 检查静态文件..." -ForegroundColor Yellow
$staticDir = "dist\static"
if (-not (Test-Path $staticDir)) {
    Write-Host "❌ 静态目录不存在: $staticDir" -ForegroundColor Red
    exit 1
}

$htmlFiles = Get-ChildItem -Path $staticDir -Filter "*.html"
Write-Host "📄 生成的静态文件数量: $($htmlFiles.Count)" -ForegroundColor Cyan

if ($htmlFiles.Count -eq 0) {
    Write-Host "❌ 没有生成静态HTML文件" -ForegroundColor Red
    exit 1
}

# 显示前几个文件
Write-Host "📄 静态文件示例:" -ForegroundColor Cyan
$htmlFiles | Select-Object -First 5 | ForEach-Object {
    Write-Host "  - $($_.Name)" -ForegroundColor Gray
}

# 3. 检查客户端脚本是否注入
Write-Host "`n🔍 检查客户端脚本注入..." -ForegroundColor Yellow
$sampleFile = $htmlFiles[0].FullName
$htmlContent = Get-Content -Path $sampleFile -Raw

if ($htmlContent -match "data-seo-redirect") {
    Write-Host "✅ 客户端检测脚本已注入" -ForegroundColor Green
}
else {
    Write-Host "❌ 客户端检测脚本未注入" -ForegroundColor Red
    exit 1
}

# 4. 启动本地服务器进行测试
Write-Host "`n🚀 启动本地测试服务器..." -ForegroundColor Yellow
Write-Host "📝 测试说明:" -ForegroundColor Cyan
Write-Host "  1. 使用普通浏览器访问: http://localhost:3000" -ForegroundColor Gray
Write-Host "  2. 访问静态页面: http://localhost:3000/static/en_simple_en.html" -ForegroundColor Gray
Write-Host "  3. 使用curl模拟爬虫访问测试重定向功能" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 curl测试命令示例:" -ForegroundColor Cyan
Write-Host '  curl -H "User-Agent: Googlebot" http://localhost:3000/en/simple/en' -ForegroundColor Gray
Write-Host '  curl -H "User-Agent: Mozilla/5.0" http://localhost:3000/en/simple/en' -ForegroundColor Gray
Write-Host ""
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Yellow

# 启动服务器
try {
    pnpm run serve
}
catch {
    Write-Host "❌ 服务器启动失败: $_" -ForegroundColor Red
    exit 1
}
