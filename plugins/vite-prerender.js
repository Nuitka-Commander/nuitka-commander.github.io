/**
 * @Description Vite Playwright 预渲染插件
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
 */

import { chromium } from 'playwright'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import os from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 计算最佳并发数量
 */
function calculateOptimalConcurrency() {
    const totalMemoryGB = os.totalmem() / (1024 * 1024 * 1024)
    const cpuCores = os.cpus().length
    
    // 基于内存和CPU核心数计算并发数
    // 每个浏览器实例大约需要200-300MB内存
    const memoryBasedConcurrency = Math.floor(totalMemoryGB / 0.3)
    const cpuBasedConcurrency = Math.max(2, Math.floor(cpuCores / 2))
    
    // 取较小值，但至少为2，最多为8
    const concurrency = Math.min(Math.max(2, Math.min(memoryBasedConcurrency, cpuBasedConcurrency)), 8)
    
    console.log(`💻 系统信息: ${totalMemoryGB.toFixed(1)}GB 内存, ${cpuCores} CPU核心`)
    console.log(`🚀 计算出的最佳并发数: ${concurrency}`)
    
    return concurrency
}

/**
 * Vite Playwright 预渲染插件
 */
export default function vitePrerender(options = {}) {
    let config
    
    const pluginInstance = {
        name: 'vite-prerender',
        configResolved(resolvedConfig) {
            config = resolvedConfig
        },
        
        async closeBundle() {
            // 只在生产构建时执行预渲染
            if (config.command !== 'build' || config.mode === 'development') {
                return
            }
            
            console.log('\n🎭 开始预渲染静态页面...')
            
            try {
                await pluginInstance.prerender(options)
                console.log('✅ 预渲染完成!')
            } catch (error) {
                console.error('❌ 预渲染失败:', error)
                throw error
            }
        },          async prerender(options) {
            const {
                pages = [],
                playwrightOptions = {},
                renderOptions = {},
                injectScript = ''
            } = options
            
            if (pages.length === 0) {
                console.log('⚠️  没有配置预渲染页面')
                return
            }
            
            console.log(`📋 将渲染 ${pages.length} 个页面`)
            
            // 启动临时预览服务器
            let previewServer
            try {
                const { preview } = await import('vite')
                previewServer = await preview({
                    root: config.root,
                    build: {
                        outDir: config.build.outDir
                    },
                    preview: {
                        port: 4173,
                        host: 'localhost'
                    }
                })
                
                // 等待服务器启动
                await new Promise(resolve => setTimeout(resolve, 2000))
                console.log('🚀 预览服务器已启动: http://localhost:4173/')
                
                // 计算最佳并发数量
                const optimalConcurrency = calculateOptimalConcurrency()
                const concurrency = renderOptions.concurrency || optimalConcurrency
                
                console.log(`⚡ 使用并发数: ${concurrency}`)
                
                // 启动 Playwright 浏览器实例池
                const browsers = []
                for (let i = 0; i < concurrency; i++) {
                    const browser = await chromium.launch({
                        headless: true,
                        ...playwrightOptions
                    })
                    browsers.push(browser)
                }
                
                try {
                    // 确保输出目录存在
                    await fs.ensureDir(renderOptions.outputDir || 'dist/static')
                      // 分批并发渲染页面
                    const chunks = []
                    for (let i = 0; i < pages.length; i += concurrency) {
                        chunks.push(pages.slice(i, i + concurrency))
                    }
                    
                    let processedCount = 0
                    const startTime = Date.now()
                    
                    for (const chunk of chunks) {
                        await Promise.all(
                            chunk.map(async (pageConfig, index) => {
                                const browserIndex = index % browsers.length
                                await pluginInstance.renderPage(browsers[browserIndex], pageConfig, renderOptions, injectScript)
                                processedCount++
                                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
                                console.log(`📄 已渲染: ${processedCount}/${pages.length} - ${pageConfig.path} (${elapsed}s)`)
                            })
                        )
                    }
                    
                    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
                    console.log(`🎉 渲染完成! 总耗时: ${totalTime}s, 平均: ${(totalTime / pages.length).toFixed(1)}s/页`)
                    
                    // 生成 sitemap
                    if (renderOptions.generateSitemap) {
                        await pluginInstance.generateSitemap(pages, renderOptions)
                        console.log('🗺️  Sitemap 已生成')
                    }
                    
                } finally {
                    // 关闭所有浏览器实例
                    await Promise.all(browsers.map(browser => browser.close()))
                }
                
            } finally {
                // 关闭预览服务器
                if (previewServer) {
                    await previewServer.close()
                    console.log('🛑 预览服务器已关闭')
                }
            }
        },
        
        async renderPage(browser, pageConfig, renderOptions, injectScript) {
            const page = await browser.newPage()
            
            try {
                // 设置视窗大小
                if (renderOptions.viewport) {
                    await page.setViewportSize(renderOptions.viewport)
                }
                
                // 注入脚本
                if (injectScript) {
                    await page.addInitScript(injectScript)
                }
                
                // 设置 localStorage
                if (pageConfig.localStorage) {
                    await page.addInitScript((storageData) => {
                        Object.entries(storageData).forEach(([key, value]) => {
                            localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
                        })
                    }, pageConfig.localStorage)                }
                
                // 获取本地服务器地址
                const baseUrl = 'http://localhost:4173'
                
                // 导航到页面
                await page.goto(baseUrl, {
                    waitUntil: 'networkidle',
                    timeout: 30000
                })                  // 等待页面渲染完成
                if (renderOptions.waitForSelector) {
                    try {
                        await page.waitForSelector(renderOptions.waitForSelector, {
                            timeout: renderOptions.waitTime || 10000
                        })
                    } catch (error) {
                        console.warn(`⚠️  等待选择器超时: ${renderOptions.waitForSelector}`)
                    }
                } else {
                    // 等待预渲染准备标记
                    try {
                        console.log(`⏳ 等待页面预渲染准备... (${pageConfig.path})`)
                        
                        // 等待DOM加载
                        await page.waitForLoadState('domcontentloaded')
                        
                        // 等待预渲染准备标记
                        await page.waitForFunction(() => {
                            return document.body.getAttribute('data-prerender-ready') === 'true'
                        }, {
                            timeout: renderOptions.waitTime || 15000
                        })
                        
                        console.log(`✅ 页面预渲染准备就绪 (${pageConfig.path})`)
                    } catch (error) {
                        console.warn(`⚠️  等待预渲染准备标记超时 (${pageConfig.path})，使用固定等待时间`)
                        
                        // 输出调试信息
                        try {
                            const readyAttribute = await page.evaluate(() => {
                                return document.body.getAttribute('data-prerender-ready')
                            })
                            console.log(`📝 当前预渲染标记值: "${readyAttribute}"`)
                            
                            // 检查控制台日志
                            const logs = await page.evaluate(() => {
                                return Array.from(document.querySelectorAll('*')).some(el => 
                                    el.getAttribute('data-prerender-ready') === 'true'
                                )
                            })
                            console.log(`🔍 是否找到预渲染标记: ${logs}`)
                        } catch (debugError) {
                            console.log('调试信息获取失败:', debugError.message)
                        }
                        
                        await page.waitForTimeout(3000) // 减少回退等待时间
                    }
                }
                
                // 修改页面元数据
                if (pageConfig.meta) {
                    await page.evaluate((meta) => {
                        // 更新标题
                        if (meta.title) {
                            document.title = meta.title
                        }
                        
                        // 更新或添加 meta 标签
                        const updateMeta = (name, content, property = false) => {
                            if (!content) return
                            
                            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
                            let element = document.querySelector(selector)
                            
                            if (!element) {
                                element = document.createElement('meta')
                                if (property) {
                                    element.setAttribute('property', name)
                                } else {
                                    element.setAttribute('name', name)
                                }
                                document.head.appendChild(element)
                            }
                            
                            element.setAttribute('content', content)
                        }
                        
                        updateMeta('description', meta.description)
                        updateMeta('keywords', meta.keywords)
                        updateMeta('language', meta.language)
                        
                        // Open Graph 标签
                        updateMeta('og:title', meta.title, true)
                        updateMeta('og:description', meta.description, true)
                        updateMeta('og:type', 'website', true)
                        
                        // 添加 canonical URL
                        let canonical = document.querySelector('link[rel="canonical"]')
                        if (!canonical) {
                            canonical = document.createElement('link')
                            canonical.setAttribute('rel', 'canonical')
                            document.head.appendChild(canonical)
                        }
                        canonical.setAttribute('href', window.location.href)
                        
                    }, pageConfig.meta)
                }
                
                // 获取渲染后的HTML
                const html = await page.content()
                // 保存到文件
                const outputDir = renderOptions.outputDir || 'dist/static'
                // 扁平化结构：直接使用页面路径作为文件名
                const fileName = pageConfig.path.replace(/\//g, '_').replace(/^_+|_+$/g, '') || 'index'
                const filePath = path.join(outputDir, `${fileName}.html`)
                await fs.ensureDir(path.dirname(filePath))
                await fs.writeFile(filePath, html, 'utf-8')
                
            } finally {
                await page.close()
            }        },
        
        async generateSitemap(pages, renderOptions) {
            const baseUrl = renderOptions.baseUrl || 'https://your-domain.com'
            
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `    <url>
        <loc>${baseUrl}${page.path}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`).join('\n')}
</urlset>`
              const sitemapPath = path.join(renderOptions.outputDir || 'dist/static', 'sitemap.xml')
            await fs.writeFile(sitemapPath, sitemap, 'utf-8')
        }
    }
    
    return pluginInstance
}
