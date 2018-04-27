import Vue from "vue";
import Component from "vue-class-component";

import Card from "./card";

@Component({
  components: {
    Card
  }
})
export default class App extends Vue {}
