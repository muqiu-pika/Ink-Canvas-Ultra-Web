import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNavbar } from './navbar'
import { zhNotes } from './notes'

export default defineThemeConfig({
  logo: '/icu.svg',

  appearance: true,  // 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/muqiu-pika/Ink-Canvas-Ultra' },
  ],

  prevPage: false,
  nextPage: false,

  locales: {
    '/': {
      profile: {
        avatar: '/icu.svg',
        name: 'Ink Canvas Ultra',
        description: '轻量级高性能电子白板软件',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
  },
})
