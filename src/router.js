import Vue from 'vue'
import Router from 'vue-router'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/two',
      name: 'PageTwo',
      component: PageTwo
    }
  ]
})