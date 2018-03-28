import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'
import Routes from './router/index.js'


const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});


new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
    router: router
})
