import Vue from "vue";
import Component from "vue-class-component";

import App from "./components/app";

import "./style/style.css";


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
});
