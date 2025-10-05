/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'Ink Canvas Ultra',
      lang: 'zh-CN',
      description: '一款功能强大的智能绘图工具',
    },
  },

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/images/Ink%20Canvas%20Ultra.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    
    /* 图标配置 - 已移除，因为 icon 不是 ThemeOptions 类型的有效属性 */

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    
    /* 侧边栏配置 - 快速跳转对应文章，包含文章内大标题 */
    sidebar: {
      '/': [
        {
          text: '🚀 快速开始',
          link: '/guide/getting-started.md',
          items: [
            { text: '🖥️ 安装', link: '/guide/getting-started.md#安装-🖥️' },
            { text: '🎯 使用', link: '/guide/getting-started.md#使用-🎯' },
            { text: '✋ 手势', link: '/guide/getting-started.md#手势-✋' },
            { text: '💾 保存与归档', link: '/guide/getting-started.md#保存与归档-💾' },
            { text: '📽️ 集成（PPT/WPS）', link: '/guide/getting-started.md#集成-ppt-wps-📽️' },
            { text: '⚙️ 配置', link: '/guide/getting-started.md#配置-⚙️' },
            { text: '❓ 常见问题', link: '/guide/getting-started.md#常见问题-❓' },
            { text: '💡 提示与技巧', link: '/guide/getting-started.md#提示与技巧-💡' }
          ]
        },
        {
          text: '📥 安装与更新',
          link: '/guide/install-and-update.md',
          items: [
            { text: '💻 系统要求', link: '/guide/install-and-update.md#💻-系统要求' },
            { text: '📋 安装步骤', link: '/guide/install-and-update.md#📋-安装步骤' },
            { text: '🔄 更新方式', link: '/guide/install-and-update.md#🔄-更新方式' },
            { text: '💾 数据与备份', link: '/guide/install-and-update.md#💾-数据与备份' },
            { text: '❓ 常见问题', link: '/guide/install-and-update.md#❓-常见问题' },
            { text: '📈 升级建议', link: '/guide/install-and-update.md#📈-升级建议' }
          ]
        },
        {
          text: '✨ 功能介绍',
          link: '/guide/features.md',
          items: [
            { text: '✏️ 智能笔迹处理', link: '/guide/features.md#✏️-智能笔迹处理' },
            { text: '🎨 多样化绘图工具', link: '/guide/features.md#🎨-多样化绘图工具' },
            { text: '🔄 三种工作模式', link: '/guide/features.md#🔄-三种工作模式' },
            { text: '✋ 手势控制', link: '/guide/features.md#✋-手势控制' },
            { text: '🤖 自动化功能', link: '/guide/features.md#🤖-自动化功能' },
            { text: '🔧 实用辅助功能', link: '/guide/features.md#🔧-实用辅助功能' },
            { text: '⚡ 性能优化', link: '/guide/features.md#⚡-性能优化' },
            { text: '🔌 兼容性与扩展性', link: '/guide/features.md#🔌-兼容性与扩展性' },
            { text: '💡 使用技巧', link: '/guide/features.md#💡-使用技巧' }
          ]
        },
        {
          text: '⚙️ 设置总览',
          link: '/guide/settings.md',
          items: [
            { text: '🔧 高级', link: '/guide/settings.md#⚙️-高级-advanced' },
            { text: '🎨 外观', link: '/guide/settings.md#🎨-外观-appearance' },
            { text: '🤖 自动化', link: '/guide/settings.md#🤖-自动化-automation' },
            { text: '🖼️ 画布', link: '/guide/settings.md#🖼️-画布-canvas' },
            { text: '✋ 手势', link: '/guide/settings.md#✋-手势-gesture' },
            { text: '🔺 墨迹转形', link: '/guide/settings.md#🔺-墨迹转形-inktoshape' },
            { text: '📽️ PowerPoint', link: '/guide/settings.md#📽️-powerpoint-powerpointsettings' },
            { text: '👥 随机点名', link: '/guide/settings.md#👥-随机点名-randsettings' },
            { text: '🚀 启动', link: '/guide/settings.md#🚀-启动-startup' }
          ]
        },
        {
          text: '📽️ 集成与演示',
          link: '/guide/integration.md'
        },
        {
          text: '❓ 常见问题与排障',
          link: '/guide/troubleshooting.md',
          items: [
            { text: '🛠️ 浮动工具栏不显示', link: '/guide/troubleshooting.md#🛠️-浮动工具栏不显示' },
            { text: '✏️ 演示中笔迹不显示', link: '/guide/troubleshooting.md#✏️-演示中笔迹不显示' },
            { text: '✋ 手势无效', link: '/guide/troubleshooting.md#✋-手势无效' },
            { text: '📸 截图未保存', link: '/guide/troubleshooting.md#📸-截图未保存' },
            { text: '📊 日志文件过大', link: '/guide/troubleshooting.md#📊-日志文件过大' },
            { text: '🔄 恢复默认与迁移', link: '/guide/troubleshooting.md#🔄-恢复默认与迁移' }
          ]
        },
        {
          text: '⌨️ 快捷键与操作指南',
          link: '/guide/hotkeys.md',
          items: [
            { text: '⌨️ 全局快捷键', link: '/guide/hotkeys.md#⌨️-全局快捷键' },
            { text: '💡 使用建议', link: '/guide/hotkeys.md#💡-使用建议' }
          ]
        }
      ]
    },

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 - 已禁用
    article: '/article/',
    */

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 启用 twoslash
    //   whitespace: true, // 启用 空格/Tab 高亮
    //   lineNumbers: true, // 启用行号
    // },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    // markdown: {
    //   abbr: true,         // 启用 abbr 语法  *[label]: content
    //   annotation: true,   // 启用 annotation 语法  [+label]: content
    //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
    //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
    //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    //   icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
    //   table: true,        // 启用表格增强容器语法 ::: table
    //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
    //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
    //   demo: true,         // 启用 demo 容器  ::: demo
    //   repl: {             // 启用 代码演示容器
    //     go: true,         // ::: go-repl
    //     rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
    //     python: true,     // ::: python-repl
    //   },
    //   math: {             // 启用数学公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
    //   mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
    //   image: {
    //     figure: true,     // 启用 figure
    //     lazyload: true,   // 启用图片懒加载
    //     mark: true,       // 启用图片标记
    //     size: true,       // 启用图片大小
    //   },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    // },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
