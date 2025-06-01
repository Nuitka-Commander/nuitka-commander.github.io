/**
 * @Description 本地开发服务器 - 用于测试静态部署的SEO功能
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
 */

import express from 'express'
import path from 'path'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 创建本地测试服务器
 * 注意：这个服务器仅用于本地测试，生产环境使用Cloudflare Pages等静态部署
 */
export function createServer(options = {}) {
    const app = express()
    const {
        port = 3000,
        staticDir = 'dist'
    } = options
    
    // 记录所有请求
    app.use((req, res, next) => {
        const userAgent = req.get('User-Agent') || ''
        console.log(`${new Date().toISOString()} - ${userAgent.includes('bot') ? '🤖' : '👤'} - ${req.path}`)
        next()
    })
    
    // 提供静态文件
    app.use(express.static(staticDir))
    
    // SPA 回退路由
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(staticDir, 'index.html'))
    })
    
    return app
}

/**
 * 启动本地测试服务器
 */
export function startServer(options = {}) {
    const app = createServer(options)
    const port = options.port || 3000
    
    app.listen(port, () => {
        console.log(`🚀 本地测试服务器启动在端口 ${port}`)
        console.log(`🌐 访问地址: http://localhost:${port}`)
        console.log(`📄 静态文件目录: ${options.staticDir || 'dist'}`)
        console.log('')
        console.log('💡 测试说明:')
        console.log('  - 普通浏览器访问: 自动重定向到SPA应用')
        console.log('  - 爬虫访问: 显示静态页面（请使用模拟爬虫User-Agent测试）')
        console.log('  - 静态页面路径示例: /static/en_simple_en.html')
    })
    
    return app
}

// 如果直接运行此文件，启动服务器
if (import.meta.url === `file://${process.argv[1]}`) {
    startServer({
        port: process.env.PORT || 3000,
        staticDir: 'dist'
    })
}

/**
 * 启动服务器
 */
export function startServer(options = {}) {
    const app = createServer(options)
    const port = options.port || 3000
    
    app.listen(port, () => {
        console.log(`🚀 服务器启动在端口 ${port}`)
        console.log(`🌐 访问地址: http://localhost:${port}`)
        console.log(`🤖 爬虫将被重定向到预渲染页面`)
        console.log(`👤 用户将访问SPA应用`)
    })
    
    return app
}

// 如果直接运行此文件，启动服务器
if (import.meta.url === `file://${process.argv[1]}`) {
    startServer({
        port: process.env.PORT || 3000,
        staticDir: 'dist',
        prerenderStaticDir: 'dist/static'
    })
}
