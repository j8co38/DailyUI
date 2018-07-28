import Vue from "vue";
import Component from "vue-class-component";
import VueRouter from "vue-router";

import "./style/style.css";

Vue.use(VueRouter);
import routes from "./route/route";

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router
});
