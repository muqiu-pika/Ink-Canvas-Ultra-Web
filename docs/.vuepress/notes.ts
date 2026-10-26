import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const zhGuideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: [
    { text: '快速开始', link: '/guide/getting-started.md' },
    { text: '功能介绍', link: '/guide/features.md' },
    { text: '插件开发手册', link: '/guide/plugin-development.md' }
  ]
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhGuideNote],
})
