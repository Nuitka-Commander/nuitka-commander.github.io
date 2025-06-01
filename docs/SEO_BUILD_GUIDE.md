# SEO 构建指南

本项目现已支持 SEO 优化构建，专为**静态部署环境**（如 Cloudflare Pages）设计，能够预渲染静态页面以提高搜索引擎可见性。

## 功能特性

-   **预渲染静态页面**: 使用 Playwright 预渲染所有语言和版本组合的页面（约 96 个页面）
-   **客户端爬虫检测**: 在每个静态页面中注入 JavaScript 代码，智能检测访问者类型
-   **扁平化结构**: 静态页面使用扁平化文件名格式（如 `en_2_1___en.html`）
-   **并发渲染**: 基于系统资源动态调整并发数，提高构建效率
-   **静态部署友好**: 无需服务器环境，完全适用于 Cloudflare Pages 等静态部署

## 工作原理

### 客户端智能检测

每个预渲染的静态页面都包含智能检测脚本：

-   **爬虫访问** → 继续显示静态页面内容（SEO 友好）
-   **用户访问** → 自动重定向到 SPA 应用（用户体验友好）

### 检测机制

1. **User-Agent 检测**: 识别 Google、Bing、百度等搜索引擎爬虫
2. **无头浏览器检测**: 识别 Puppeteer、Playwright 等自动化工具
3. **JavaScript 能力检测**: 检测现代 JavaScript 特性支持情况
4. **综合判断**: 多重检测确保准确识别访问者类型

## 本地使用

### 1. 安装依赖

```bash
pnpm install
npx playwright install chromium
```

### 2. SEO 构建

```bash
# 启用 SEO 预渲染构建
pnpm run build:website:seo

# 或者只进行预渲染（不启动预览服务器）
pnpm run prerender
```

### 3. 本地测试

```bash
# 完整SEO功能测试
pnpm run test:seo

# 或者分步测试
# 1. SEO构建
pnpm run build:website:seo

# 2. 启动测试服务器
pnpm run serve

# 3. 手动测试
# 浏览器访问: http://localhost:3000
# curl模拟爬虫: curl -H "User-Agent: Googlebot" http://localhost:3000/en/simple/en
```

### 4. 部署到 Cloudflare Pages

1. 将 `dist` 目录的所有文件上传到 Cloudflare Pages
2. 静态页面会自动处理爬虫和用户访问
3. 无需额外配置

## GitHub Actions 使用

### 测试版本构建 (build_beta.yml)

在 GitHub Actions 中手动触发构建时，可以选择构建类型：

-   **local_use**: 本地使用版本
-   **website**: 标准网站版本
-   **website_seo**: SEO 优化版本（包含预渲染静态页面）

### 发布版本构建 (build_and_publish.yml)

在发布新版本时，可以选择是否启用 SEO 优化：

-   勾选 "启用 SEO 优化构建" 复选框即可启用预渲染功能
-   不勾选则使用标准构建流程

## 技术细节

### 预渲染配置

-   配置文件: `prerender.config.js`
-   插件文件: `plugins/vite-prerender.js`
-   页面组合: UI 语言 × Nuitka 版本 × 命令语言

### 爬虫检测

-   检测方式: **客户端 JavaScript 检测**（适用于静态部署）
-   支持的爬虫: Google、Bing、百度、搜狗等主流搜索引擎
-   静态页面路径: `/static/` 目录下的扁平化 HTML 文件
-   重定向逻辑: 普通用户自动重定向到根路径 SPA 应用

### 并发控制

-   自动计算最佳并发数（基于 CPU 核心数和内存大小）
-   默认最大并发数: 8
-   内存充足时可达到更高并发数

## 注意事项

1. **构建时间**: SEO 构建比标准构建耗时更长（约需要额外 3-5 分钟）
2. **资源消耗**: Playwright 需要更多内存和 CPU 资源
3. **浏览器依赖**: 需要安装 Chromium 浏览器（在 CI 中自动安装）
4. **文件大小**: 预渲染版本包含更多静态文件，整体体积更大

## 故障排除

### 常见问题

1. **Playwright 浏览器安装失败**

    ```bash
    npx playwright install chromium --force
    ```

2. **内存不足错误**

    - 减少并发数量（修改 `vite-prerender.js` 中的并发计算逻辑）
    - 增加系统可用内存

3. **预渲染超时**
    - 检查页面是否正确设置了 `data-prerender-ready="true"`
    - 增加超时时间（在 `vite-prerender.js` 中修改）

### 调试模式

启用调试模式查看详细日志：

```bash
DEBUG=1 pnpm run build:website:seo
```

## 相关文件

-   `prerender.config.js` - 预渲染页面配置
-   `plugins/vite-prerender.js` - Vite 预渲染插件
-   `server/crawler-detection.js` - 爬虫检测服务器
-   `src/App.vue` - 预渲染就绪标记
-   `vite.config.js` - Vite 配置集成
-   `.github/workflows/build_beta.yml` - 测试构建工作流
-   `.github/workflows/build_and_publish.yml` - 发布构建工作流
