/**
 * @Description 客户端爬虫检测脚本 - 仅基于 User-Agent 检测
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
 * @Updated: 2025-06-02
 * 
 * 逻辑：
 * - 检测 User-Agent 中的爬虫标识，如果是爬虫则显示静态页面
 * - 其他所有情况（包括普通用户、无头浏览器等）都重定向到 SPA 应用
 */

(function() {
    'use strict';
    
    /**
     * 爬虫用户代理检测列表
     */
    const crawlerUserAgents = [
        // Google
        'googlebot',
        'googlebotimage',
        'googlebotvideo',
        'googlebotnews',
        'googlebotmobile',
        
        // Bing
        'bingbot',
        'bingpreview',
        
        // Yahoo
        'slurp',
        
        // Yandex
        'yandexbot',
        
        // Baidu
        'baiduspider',
        
        // Social Media
        'facebookexternalhit',
        'twitterbot',
        'linkedinbot',
        'whatsapp',
        'telegrambot',
        
        // Other crawlers
        'seznambot',
        'duckduckbot',
        'applebot',
        'ia_archiver',
        
        // Tools
        'curl',
        'wget',
        'python-requests',
        'axios',
        'node-fetch'
    ];
    
    /**
     * 检测是否为爬虫
     */
    function isCrawler() {
        const userAgent = navigator.userAgent.toLowerCase();
        return crawlerUserAgents.some(bot => userAgent.includes(bot));
    }
      /**
     * 判断是否应该重定向到SPA
     * 只基于 user-agent 检测爬虫，其他情况都重定向
     */
    function shouldRedirectToSPA() {
        // 如果是明确的爬虫，不重定向
        if (isCrawler()) {
            console.log('🤖 检测到搜索引擎爬虫，显示静态页面');
            return false;
        }
        
        // 所有非爬虫的访问都重定向到SPA应用
        console.log('👤 检测到普通用户，重定向到SPA应用');
        return true;
    }
    
    /**
     * 执行重定向逻辑
     */
    function executeRedirection() {
        // 检查是否已经在根路径
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            console.log('👤 已在SPA应用首页，无需重定向');
            return;
        }
        
        // 检查是否应该重定向
        if (shouldRedirectToSPA()) {
            console.log('👤 重定向用户到SPA应用...');
            
            // 保存当前路径到sessionStorage，SPA可以读取并导航到对应页面
            try {
                sessionStorage.setItem('seo_redirect_path', window.location.pathname + window.location.search + window.location.hash);
            } catch (e) {
                console.warn('无法保存重定向路径到sessionStorage:', e);
            }
            
            // 重定向到根路径
            window.location.replace('/');
        } else {
            console.log('🤖 爬虫访问，继续显示静态页面');
            
            // 为爬虫优化：移除可能的重定向脚本
            try {
                const scriptTags = document.querySelectorAll('script[data-seo-redirect]');
                scriptTags.forEach(script => script.remove());
            } catch (e) {
                // 忽略错误
            }
        }
    }
      /**
     * 添加调试信息（仅在开发环境）
     */
    function addDebugInfo() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.group('🔍 SEO重定向调试信息');
            console.log('User-Agent:', navigator.userAgent);
            console.log('是否为爬虫:', isCrawler());
            console.log('当前路径:', window.location.pathname);
            console.groupEnd();
        }
    }
    
    // 页面加载完成后执行检测
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addDebugInfo();
            executeRedirection();
        });
    } else {
        addDebugInfo();
        executeRedirection();
    }
    
})();
