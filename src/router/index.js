import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticatable)) {
    if (store.getters['authentication/auth'].isLoggedIn) {
      next()
      return
    }
    next({name: 'login.show'})
  } else {
    next()
  }
})

export default router
