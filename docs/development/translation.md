# 帮助我们翻译

## 概述

该项目由于Nuitka每个版本都有着独特的配置文件，并且要保证多版本支持，所以分为了两个部分，一个是界面翻译，一个是配置文件翻译。  
无论如何，请先fork项目，然后再在你的fork中进行编辑，完成后再通过pull request提交。

## 界面翻译

这里是Nuitka Commander基本的网页内容翻译，是随着网页更新而更新的，不会回退。

#### 操作流程

首先，请查看下列列表，查看该翻译是否已经被支持。如果已经支持，请直接对其进行修改，否则，你可以创建一个新的文件，并将其加入[supported_i18n.js](../../src/assets/languages/supported_i18n.js)
中。
格式如下:

```json
{
  "国际化标识符": {
    "name": "语言自我标识符",
    "path_name": "实际的翻译文件名(无需.js)"
  }
}
```

例如:

```json
{
  "en": {
    "name": "English",
    "path_name": "en"
  }
}
```

> 文件名为国家化名称，将`-`更改为`_` 例如：`zh-CN` -> `zh_cn.js`

你可以任选一个已经支持的语言，复制它后修改。  
在完成翻译后，请尝试在本地切换到该语言，浏览一次整个网页。如果没有问题，你可以提交pull request。
> 如果翻译过程中出现了错误，你可以打开控制台。在[constants](../../src/values/constants.json)
> 中debug模式为true的时候，你可以看到堆栈调用的信息、翻译键值错误等。

---
<details>
<summary>点击展开已翻译列表</summary>
<div id="nuitka_commander_translation_page"> 

* [en: English](../../src/assets/languages/translations/en.js)
* [zh-CN: 简体中文](../../src/assets/languages/translations/zh_cn.js)
</div>
</details>

## 配置文件翻译

首先，请查看下列列表，查看该翻译是否已经被支持。如果已经支持，请直接对其进行修改，否则
<details>
<summary>点击展开已翻译列表</summary>
<div id="nuitka_commander_translation_config"> 

* [2.1.*](../../src/nuitka_config_files/configs/2.1._.js)
  * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.1._/zh_cn.js)
* [2.2.*](../../src/nuitka_config_files/configs/2.2._.js)
  * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.2._/zh_cn.js)
* [2.3.*](../../src/nuitka_config_files/configs/2.3._.js)
  * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.3._/zh_cn.js)
* [2.4.*](../../src/nuitka_config_files/configs/2.4._.js)
  * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.4._/zh_cn.js)
</div>
</details>


