/**
 * @Description 预渲染配置 - 定义需要预渲染的页面组合
 * @Author: GitHub Copilot
 * @Date: 2024-12-19
 */

import {supported_i18n} from "./src/assets/languages/supported_i18n.js";
import supported_nuitka_version from './src/nuitka_config_files/supported_nuitka_version.js'
import { readdirSync } from 'fs';
import { join } from 'path';

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
                        '_Nuitka_Commander_user_options': JSON.stringify({
                            theme: "auto",
                            language: uiLang,
                            nuitka_language: cmdLang, 
                            nuitka_version: nuitkaVersion,
                            show_original_command: true, 
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
    try {
        // 获取版本对应的路径
        const versionPath = supported_nuitka_version.versions[nuitkaVersion];
        if (!versionPath) {
            console.warn(`版本 ${nuitkaVersion} 未在支持列表中找到，使用默认语言`);
            return ['en']; // 默认返回英文
        }
        
        // 构建翻译文件夹的完整路径
        const translationsDir = join(process.cwd(), 'src', 'nuitka_config_files', 'translations', versionPath);
        
        // 读取文件夹中的所有文件
        const files = readdirSync(translationsDir);
        
        // 筛选出 .js 文件并提取语言代码
        const supportedLanguages = files
            .filter(file => file.endsWith('.js'))
            .map(file => file.replace('.js', ''));
        
        console.log(`版本 ${nuitkaVersion} 支持的命令语言:`, supportedLanguages);
        
        // 语言代码映射（从文件名到标准语言代码）
        const languageMapping = {
            'zh_cn': 'zh-CN',
            'en': 'en', 
            'de': 'de'
        };
        
        // 返回映射后的语言代码
        return supportedLanguages.map(lang => languageMapping[lang] || lang);
        
    } catch (error) {
        console.error(`读取版本 ${nuitkaVersion} 的语言配置时出错:`, error);
        // 出错时返回默认语言
        return ['en'];
    }
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
        waitTime: 15000, // 增加等待时间以确保 tooltip 完全加载
        
        // 等待条件（可选）
        waitUntil: 'networkidle2',
        
        // 需要等待的选择器（表示页面加载完成）
        waitForSelector: '[data-prerender-ready]',
          // 输出目录
        outputDir: 'dist/static',
        
        // 网站基础URL（用于sitemap）
        baseUrl: 'https://nuitka-commander.erduotong.com'
    },    // 需要注入的脚本（在页面加载前执行）
    injectScript: `
        // 强制显示所有 el-tooltip 用于 SEO
        window.addEventListener('load', () => {
            setTimeout(() => {
                console.log('🎯 开始触发所有 tooltip 显示...');
                
                let triggeredCount = 0;
                
                // 分批次触发 tooltip，避免性能问题
                const triggerTooltips = () => {
                    try {
                        // 查找所有 el-tooltip__trigger 元素（这是 Element Plus 的标准类）
                        const tooltipTriggers = document.querySelectorAll('.el-tooltip__trigger');
                        console.log(\`找到 \${tooltipTriggers.length} 个 tooltip 触发器\`);
                        
                        tooltipTriggers.forEach((trigger, index) => {
                            setTimeout(() => {
                                // 创建鼠标进入事件
                                const mouseenterEvent = new MouseEvent('mouseenter', {
                                    view: window,
                                    bubbles: true,
                                    cancelable: true,
                                    clientX: 0,
                                    clientY: 0
                                });
                                
                                // 创建鼠标悬停事件
                                const mouseoverEvent = new MouseEvent('mouseover', {
                                    view: window,
                                    bubbles: true,
                                    cancelable: true,
                                    clientX: 0,
                                    clientY: 0
                                });
                                
                                // 触发事件
                                trigger.dispatchEvent(mouseenterEvent);
                                trigger.dispatchEvent(mouseoverEvent);
                                
                                triggeredCount++;
                                console.log(\`触发第 \${triggeredCount} 个 tooltip\`);
                            }, index * 10); // 每个 tooltip 间隔 10ms 触发
                        });
                        
                        // 额外查找其他可能的 tooltip 元素
                        const additionalSelectors = [
                            '.el-tooltip',
                            '[data-tooltip]', 
                            '.edit_content_card',
                            '.cli_command'
                        ];
                        
                        additionalSelectors.forEach(selector => {
                            const elements = document.querySelectorAll(selector);
                            elements.forEach((element, index) => {
                                if (!element.classList.contains('el-tooltip__trigger')) {
                                    setTimeout(() => {
                                        element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
                                        element.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
                                    }, (tooltipTriggers.length + index) * 10);
                                }
                            });
                        });
                        
                    } catch (error) {
                        console.error('触发 tooltip 时出错:', error);
                    }
                };
                
                // 立即触发一次
                triggerTooltips();
                
                // 延迟再触发一次，确保所有 Vue 组件都已加载
                setTimeout(() => {
                    console.log('🔄 重新触发 tooltip...');
                    triggerTooltips();
                }, 1000);
                
                // 标记页面准备好进行预渲染
                setTimeout(() => {
                    const readyElement = document.createElement('div');
                    readyElement.setAttribute('data-prerender-ready', 'true');
                    readyElement.style.display = 'none';
                    document.body.appendChild(readyElement);
                    console.log(\`✅ 页面准备完成，共触发了 \${triggeredCount} 个 tooltip\`);
                }, 2500); // 给足够时间让所有 tooltip 都显示
            }, 1000);
        });
    `
}

export default prerenderConfig
