import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Info_conta from './views/Info_conta.vue'
import Services from './views/Services.vue'
import Invoice from './views/Invoice.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {

      path: '/conta',
      name: 'conta',
      component: Info_conta
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice
    }
  ]
})
