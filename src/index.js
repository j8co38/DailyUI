import Vue from 'vue'
import Component from "vue-class-component";
import VueRouter from 'vue-router'

import App from './components/app'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    components: {App},
    template: '<app/>',
})
