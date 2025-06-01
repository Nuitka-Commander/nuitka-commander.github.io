/**
 * @Description 服务端路由 - 检测爬虫并提供静态页面
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
 * 爬虫用户代理检测
 */
const crawlerUserAgents = [
    // Google
    'Googlebot',
    'GooglebotVideo',
    'GooglebotImage',
    'GooglebotNews',
    'GooglebotMobile',
    
    // Bing
    'Bingbot',
    'BingPreview',
    
    // Yahoo
    'Slurp',
    
    // Yandex
    'YandexBot',
    
    // Baidu
    'Baiduspider',
    
    // Facebook
    'facebookexternalhit',
    
    // Twitter
    'Twitterbot',
    
    // LinkedIn
    'LinkedInBot',
    
    // WhatsApp
    'WhatsApp',
    
    // Telegram
    'TelegramBot',
    
    // 其他常见爬虫
    'SeznamBot',
    'DuckDuckBot',
    'AppleBot',
    'ia_archiver', // Internet Archive
    'curl',
    'wget',
    'python-requests',
    'axios',
    'node-fetch'
]

/**
 * 检测是否为爬虫
 */
function isCrawler(userAgent) {
    if (!userAgent) return false
    
    const ua = userAgent.toLowerCase()
    return crawlerUserAgents.some(bot => ua.includes(bot.toLowerCase()))
}

/**
 * 查找对应的静态页面（扁平化结构）
 */
async function findStaticPage(requestPath, staticDir) {
    // 移除开头和结尾的斜杠
    const cleanPath = requestPath.replace(/^\//, '').replace(/\/$/, '')
    
    // 如果是根路径，使用默认页面
    if (!cleanPath) {
        const defaultPage = path.join(staticDir, 'en_simple_en.html')
        if (await fs.pathExists(defaultPage)) {
            return defaultPage
        }
    }
    
    // 将路径转换为扁平化的文件名格式
    const flattenedName = cleanPath.replace(/\//g, '_') + '.html'
    const directMatch = path.join(staticDir, flattenedName)
    if (await fs.pathExists(directMatch)) {
        return directMatch
    }
    
    // 尝试解析路径并构建可能的文件名
    const pathSegments = cleanPath.split('/').filter(seg => seg)
    
    if (pathSegments.length >= 2) {
        const [lang, version, ...rest] = pathSegments
        const cmdLang = rest[0] || 'en'
        
        // 构建扁平化的文件名 (lang_version_cmdLang.html)
        const versionFormatted = version.replace(/[.*]/g, '_')
        const flattenedName = `${lang}_${versionFormatted}_${cmdLang}.html`
        const staticFilePath = path.join(staticDir, flattenedName)
        
        if (await fs.pathExists(staticFilePath)) {
            return staticFilePath
        }
    }
    
    // 尝试基于语言的匹配
    if (pathSegments.length >= 1) {
        const lang = pathSegments[0]
        
        // 查找以该语言开头的任意文件
        try {
            const files = await fs.readdir(staticDir)
            const matchingFile = files.find(file => 
                file.startsWith(`${lang}_`) && file.endsWith('.html')
            )
            
            if (matchingFile) {
                return path.join(staticDir, matchingFile)
            }
        } catch (error) {
            console.log('读取静态目录失败:', error.message)
        }
    }
    
    return null
}

/**
 * 创建路由中间件
 */
export function createCrawlerDetectionMiddleware(options = {}) {
    const {
        staticDir = 'dist/static',
        fallbackPath = '/index.html'
    } = options
    
    return async (req, res, next) => {
        const userAgent = req.get('User-Agent') || ''
        const requestPath = req.path
        
        // 记录访问日志
        console.log(`${new Date().toISOString()} - ${isCrawler(userAgent) ? '🤖 CRAWLER' : '👤 USER'} - ${userAgent} - ${requestPath}`)
        
        // 如果是爬虫访问
        if (isCrawler(userAgent)) {
            // 尝试提供对应的静态页面
            const staticFilePath = await findStaticPage(requestPath, staticDir)
            
            if (staticFilePath) {
                console.log(`📄 提供静态页面: ${staticFilePath}`)
                return res.sendFile(path.resolve(staticFilePath))
            } else {
                // 如果没有找到对应的静态页面，提供默认的静态页面
                const defaultStaticPath = path.join(staticDir, 'en_simple_en.html')
                if (await fs.pathExists(defaultStaticPath)) {
                    console.log(`📄 提供默认静态页面: ${defaultStaticPath}`)
                    return res.sendFile(path.resolve(defaultStaticPath))
                } else {
                    // 如果连默认页面都没有，返回404
                    console.log(`❌ 未找到静态页面: ${requestPath}`)
                    return res.status(404).send('Page not found')
                }
            }
        }
        
        // 普通用户访问，继续正常流程
        next()
    }
}

/**
 * Express 服务器设置
 */
export function createServer(options = {}) {
    const app = express()
    const {
        port = 3000,
        staticDir = 'dist',
        prerenderStaticDir = 'dist/static',
        fallbackPath = '/index.html'
    } = options
    
    // 添加爬虫检测中间件
    app.use(createCrawlerDetectionMiddleware({
        staticDir: prerenderStaticDir,
        fallbackPath
    }))
    
    // 提供静态文件
    app.use(express.static(staticDir))
    
    // SPA 回退路由（对于普通用户）
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(staticDir, 'index.html'))
    })
    
    return app
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
