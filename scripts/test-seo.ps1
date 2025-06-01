# SEO 功能测试脚本
Write-Host "🧪 开始SEO功能测试..." -ForegroundColor Green

# 1. 检查必要文件
Write-Host "`n🔍 检查必要文件..." -ForegroundColor Yellow
$requiredFiles = @(
    "scripts\client-crawler-detection.js",
    "plugins\vite-prerender.js",
    "prerender.config.js"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "❌ 缺少文件: $file" -ForegroundColor Red
        exit 1
    }
}
Write-Host "✅ 必要文件检查通过" -ForegroundColor Green

# 2. 构建SEO版本
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

# 3. 检查生成的文件
Write-Host "`n🔍 检查生成的文件..." -ForegroundColor Yellow

# 检查静态文件
$staticDir = "dist\static"
if (Test-Path $staticDir) {
    $htmlFiles = Get-ChildItem -Path $staticDir -Filter "*.html"
    Write-Host "📄 静态HTML文件: $($htmlFiles.Count)个" -ForegroundColor Cyan
    
    # 检查一个文件中是否包含爬虫检测脚本
    if ($htmlFiles.Count -gt 0) {
        $sampleFile = $htmlFiles[0].FullName
        $htmlContent = Get-Content -Path $sampleFile -Raw
        if ($htmlContent -match "data-seo-redirect") {
            Write-Host "✅ 爬虫检测脚本已注入" -ForegroundColor Green
        }
        else {
            Write-Host "❌ 爬虫检测脚本未注入" -ForegroundColor Red
        }
    }
}
else {
    Write-Host "❌ 静态目录不存在" -ForegroundColor Red
}

# 检查 sitemap.xml
if (Test-Path "dist\static\sitemap.xml") {
    Write-Host "✅ Sitemap.xml 已生成" -ForegroundColor Green
}
else {
    Write-Host "⚠️  Sitemap.xml 未生成" -ForegroundColor Yellow
}

# 检查 robots.txt
if (Test-Path "dist\static\robots.txt") {
    Write-Host "✅ Robots.txt 已生成" -ForegroundColor Green
}
else {
    Write-Host "⚠️  Robots.txt 未生成" -ForegroundColor Yellow
}

Write-Host "`n🎉 SEO测试完成!" -ForegroundColor Green
Write-Host "💡 可以将 dist 目录的内容部署到 Cloudflare Pages 等静态托管服务" -ForegroundColor Cyan
