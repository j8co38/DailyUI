import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    components: {App},
    template: '<app/>',
})
