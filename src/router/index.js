import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { authenticated } from '@/utils/authenticated'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticatable === true)) {
    // next({name: 'login.show'})
    authenticated()
      .then(tokenExists => {
        if (tokenExists) {
          // If user:token value from sessionStorage
          // exists then redirect to the guarded admin page
          console.log('tokeexists')
          next()
        } else {
          let fromname = from.name || 'login.show'
          // else, access the guarded admin page, anyway. NOT!
          next({name: fromname}) // stay in the login page
        }
      })
  } else {
    next()
  }
})

export default router
