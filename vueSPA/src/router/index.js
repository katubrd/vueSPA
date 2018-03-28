import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/home/home.vue';
import ShedulePage from '@/components/pages/shedule/shedule.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/shedule', component: ShedulePage, name: 'ShedulePage' }
  ]
})
