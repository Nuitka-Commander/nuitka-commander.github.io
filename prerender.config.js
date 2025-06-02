/**
 * @Description 预渲染配置 - 定义需要预渲染的页面组合
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
 */

import {supported_i18n} from "./src/assets/languages/supported_i18n.js";
import supported_nuitka_version from './src/nuitka_config_files/supported_nuitka_version.js'

/**
 * 生成预渲染页面配置
 * 每个配置包含 UI语言、Nuitka版本、以及对应的localStorage设置
 */
function generatePageConfigurations() {
    const configurations = []
    // 获取支持的UI语言 - 只保留中文和英文
    const allUiLanguages = Object.keys(supported_i18n);
    const uiLanguages = allUiLanguages.filter(lang => lang === "zh-CN" || lang === "en");

    // 获取支持的Nuitka版本 - 只保留最新的3个版本加上"simple"版本
    const allVersions = Object.keys(supported_nuitka_version.versions);
    const numericVersions = allVersions.filter(v => v !== "simple").sort((a, b) => {
        // 提取版本号进行比较 (例如: "2.7.*" -> 2.7)
        const versionA = parseFloat(a.replace(/[.*]/g, ""));
        const versionB = parseFloat(b.replace(/[.*]/g, ""));
        return versionB - versionA; // 降序排列，最新版本在前
    });
    // 取最新的3个版本，加上"simple"版本
    const nuitkaVersions = [
        ...numericVersions.slice(0, 3), // 最新的3个版本
        "simple", // 始终包含simple版本
    ];

    console.log("选择的UI语言:", uiLanguages);
    console.log("选择的Nuitka版本:", nuitkaVersions);
    
    // 为每种组合生成配置
    uiLanguages.forEach(uiLang => {
        nuitkaVersions.forEach(nuitkaVersion => {
            // 获取该Nuitka版本支持的命令语言
            const commandLanguages = getCommandLanguagesForVersion(nuitkaVersion)
            
            commandLanguages.forEach(cmdLang => {
                const config = {                    // 页面标识
                    id: `${uiLang}-${nuitkaVersion}-${cmdLang}`,
                      // URL路径（扁平化结构）- 使用简化的文件名
                    path: `/${uiLang}-${nuitkaVersion.replace(/[.*]/g, '_')}-${cmdLang}`,                    // localStorage设置
                    localStorage: {
                        'vueuse-locale': uiLang,
                        'selected_nuitka_version': nuitkaVersion,
                        'command_language': cmdLang,
                        '_Nuitka_Commander_user_options': JSON.stringify({
                            theme: "auto",
                            language: "undefined",
                            nuitka_language: "undefined", 
                            nuitka_version: nuitkaVersion,
                            show_original_command: true, // 预渲染时默认开启显示源命令
                            settings_page_show: false,
                            action_tab: "edit",
                            action_command_tab: ""
                        })
                    },
                    
                    // IndexDB设置（如果需要）
                    indexDB: {
                        // 可以根据需要添加indexDB的初始化数据
                    },
                    
                    // 页面元数据（用于SEO）
                    meta: {
                        title: generatePageTitle(uiLang, nuitkaVersion, cmdLang),
                        description: generatePageDescription(uiLang, nuitkaVersion, cmdLang),
                        keywords: generatePageKeywords(uiLang, nuitkaVersion, cmdLang),
                        language: uiLang
                    }
                }
                
                configurations.push(config)
            })
        })
    })
    
    return configurations
}

/**
 * 获取指定Nuitka版本支持的命令语言
 */
function getCommandLanguagesForVersion(nuitkaVersion) {
    // 根据实际翻译文件结构确定支持的命令语言
    // 从搜索结果可以看出，支持的命令语言包括：
    const supportedLanguages = ['en', 'zh_cn', 'de'] // 基于实际翻译文件
    
    // 根据版本目录结构映射语言代码
    const languageMapping = {
        'zh_cn': 'zh-CN',
        'en': 'en', 
        'de': 'de'
    }
    
    // 返回映射后的语言代码
    return supportedLanguages.map(lang => languageMapping[lang] || lang)
}

/**
 * 生成页面标题
 */
function generatePageTitle(uiLang, nuitkaVersion, cmdLang) {
    const titles = {
        'en': `Nuitka Commander - ${nuitkaVersion} (${cmdLang})`,
        'zh-CN': `Nuitka Commander - ${nuitkaVersion} (${cmdLang})`,
        'de': `Nuitka Commander - ${nuitkaVersion} (${cmdLang})`,
        'fr': `Nuitka Commander - ${nuitkaVersion} (${cmdLang})`
    }
    return titles[uiLang] || titles['en']
}

/**
 * 生成页面描述
 */
function generatePageDescription(uiLang, nuitkaVersion, cmdLang) {
    const descriptions = {
        'en': `Nuitka Commander GUI tool for version ${nuitkaVersion} with ${cmdLang} command interface. Easy-to-use Python compilation tool.`,
        'zh-CN': `Nuitka Commander GUI工具，支持${nuitkaVersion}版本，${cmdLang}命令界面。简单易用的Python编译工具。`,
        'de': `Nuitka Commander GUI-Tool für Version ${nuitkaVersion} mit ${cmdLang} Befehlsschnittstelle. Benutzerfreundliches Python-Kompilierungstool.`,
        'fr': `Outil GUI Nuitka Commander pour la version ${nuitkaVersion} avec interface de commande ${cmdLang}. Outil de compilation Python facile à utiliser.`
    }
    return descriptions[uiLang] || descriptions['en']
}

/**
 * 生成页面关键词
 */
function generatePageKeywords(uiLang, nuitkaVersion, cmdLang) {
    const baseKeywords = [
        'Nuitka', 'Python', 'Compiler', 'GUI', 'Commander',
        nuitkaVersion, cmdLang, 'compilation', 'executable'
    ]
    
    const langSpecificKeywords = {
        'zh-CN': ['Python编译器', '图形界面', '编译工具', '可执行文件'],
        'de': ['Python-Compiler', 'Grafische Benutzeroberfläche', 'Kompilierung'],
        'fr': ['Compilateur Python', 'Interface graphique', 'compilation']
    }
    
    return [...baseKeywords, ...(langSpecificKeywords[uiLang] || [])].join(', ')
}

// 导出配置
export const prerenderConfig = {
    // 预渲染页面配置
    pages: generatePageConfigurations(),
    
    // Puppeteer选项
    puppeteerOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    },
    
    // 渲染选项
    renderOptions: {
        // 等待时间（毫秒）
        waitTime: 10000,
        
        // 等待条件（可选）
        waitUntil: 'networkidle2',
        
        // 需要等待的选择器（表示页面加载完成）
        waitForSelector: '[data-prerender-ready]',
          // 输出目录
        outputDir: 'dist/static',
        
        // 网站基础URL（用于sitemap）
        baseUrl: 'https://nuitka-commander.erduotong.com'
    },
    
    // 需要注入的脚本（在页面加载前执行）
    injectScript: `
        // 标记页面准备好进行预渲染
        window.addEventListener('load', () => {
            setTimeout(() => {
                const readyElement = document.createElement('div');
                readyElement.setAttribute('data-prerender-ready', 'true');
                readyElement.style.display = 'none';
                document.body.appendChild(readyElement);
            }, 1000);
        });
    `
}

export default prerenderConfig
