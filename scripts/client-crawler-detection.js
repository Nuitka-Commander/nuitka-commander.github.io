/**
 * @Description 客户端爬虫检测脚本 - 用于静态部署环境
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
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
     * 检测是否为无头浏览器（通常是爬虫）
     */
    function isHeadlessBrowser() {
        // 检测常见的无头浏览器特征
        return (
            navigator.webdriver === true ||
            window.navigator.webdriver === true ||
            window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect === undefined ||
            window.phantom !== undefined ||
            window.callPhantom !== undefined
        );
    }
    
    /**
     * 检测是否支持JavaScript（爬虫通常不会执行JS）
     */
    function supportsModernJS() {
        try {
            // 检测ES6+特性支持
            return typeof Promise !== 'undefined' && 
                   typeof Set !== 'undefined' && 
                   typeof Map !== 'undefined';
        } catch (e) {
            return false;
        }
    }
    
    /**
     * 综合判断是否为爬虫
     */
    function shouldRedirectToSPA() {
        // 如果是明确的爬虫，不重定向
        if (isCrawler()) {
            console.log('🤖 检测到搜索引擎爬虫，显示静态页面');
            return false;
        }
        
        // 如果是无头浏览器，可能是爬虫
        if (isHeadlessBrowser()) {
            console.log('🤖 检测到无头浏览器，可能是爬虫，显示静态页面');
            return false;
        }
        
        // 如果不支持现代JS，可能是爬虫
        if (!supportsModernJS()) {
            console.log('🤖 检测到不支持现代JS的环境，可能是爬虫，显示静态页面');
            return false;
        }
        
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
            console.log('是否为无头浏览器:', isHeadlessBrowser());
            console.log('支持现代JS:', supportsModernJS());
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
