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
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icu.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/icu.ico' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
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
            { text: '📽️ 视频展台', link: '/guide/features.md#📽️-视频展台' },
            { text: '📸 截屏功能', link: '/guide/features.md#📸-截屏功能' },
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
            { text: '📽️ 视频展台', link: '/guide/settings.md#📽️-视频展台-videopresenter' },
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
        },
        {
          text: '🚀 高级功能与技巧',
          link: '/guide/advanced-features.md',
          items: [
            { text: '🎯 智能墨迹识别', link: '/guide/advanced-features.md#🎯-智能墨迹识别' },
            { text: '🎨 高级绘图功能', link: '/guide/advanced-features.md#🎨-高级绘图功能' },
            { text: '✋ 手势操作进阶', link: '/guide/advanced-features.md#✋-手势操作进阶' },
            { text: '💾 数据管理与迁移', link: '/guide/advanced-features.md#💾-数据管理与迁移' }
          ]
        },
        {
          text: '🧩 插件开发手册',
          link: '/guide/plugin-development.md'
        },
        {
          text: '🙏 特别鸣谢',
          link: '/guide/acknowledgments.md',
          items: [
            { text: '🧑‍💻 开发者', link: '/guide/acknowledgments.md#🧑‍💻-ink-canvas-ultra-开发者' },
            { text: '🤝 贡献者', link: '/guide/acknowledgments.md#🤝-ink-canvas-ultra-贡献者' },
            { text: '🔗 上游项目开发者', link: '/guide/acknowledgments.md#🔗-上游项目开发者' },
            { text: '🔗 上游项目', link: '/guide/acknowledgments.md#🔗-上游项目' },
            { text: '💖 原项目贡献者', link: '/guide/acknowledgments.md#💖-原项目贡献者' }
          ]
        }
      ]
    },

    blog: false,
    cache: 'filesystem',
    search: { provider: 'local' },
  }),
})
