import router from './router'
import store from './store'

import { getToken } from '@/utils/auth'

// router.beforeEach(async (to, from, next) => {
//   // 设置标题
//   document.title = to.meta.title || 'Yeek Vue Work'
//   const hasToken = getToken()
//   console.log(hasToken)
//   next()
// })
