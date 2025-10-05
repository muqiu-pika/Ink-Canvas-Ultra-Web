/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  { text: '指南', link: '/guide/getting-started.md', icon: 'material-symbols:explore' },
  { text: '功能', link: '/guide/features.md', icon: 'material-symbols:checklist' },
  { text: '下载', link: 'https://github.com/muqiu-pika/Ink-Canvas-Ultra/releases', icon: 'material-symbols:download' },
  { text: '源码', link: 'https://github.com/muqiu-pika/Ink-Canvas-Ultra', icon: 'ri:github-fill' },
])

