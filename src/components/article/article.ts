import Vue from "vue";
import Component from "vue-class-component";

import axios from "axios";
import { Route } from "vue-router";


@Component
export default class Article extends Vue {

  protected post: object;

  public data() {
    return {
      post: this.post
    }
  }

  public async created() {
    const url = `http://dailyui.burita.me/wp/wp-json/wp/v2/posts/${this.$route.params.id}`;

    const res = await axios.get(url);
    this.post = res.data.content.rendered;

  }

}
