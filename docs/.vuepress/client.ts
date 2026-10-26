import { defineClientConfig } from 'vuepress/client'
import { useRouter } from 'vuepress/client'

import './theme/styles/custom.css'

export default defineClientConfig({
  setup() {
    const router = useRouter()

    router.beforeEach((to) => {
      if (to.path.includes('/guide/') || to.path.includes('/en/guide/')) {
        return '/'
      }
    })
  },
})
