import Vue from "vue";
import Component from "vue-class-component";
import VueRouter from "vue-router";

import "./style/style.css";

Vue.use(VueRouter);
import routes from "./route/route";

const router = new VueRouter({
  // mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  el: '#app',
  router
});
