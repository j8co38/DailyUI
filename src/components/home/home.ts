import Vue from "vue";
import Component from "vue-class-component";

import axios from "axios";

import FooterSection from "../footer/footer";


@Component({
  components: {
    FooterSection
  }
})
export default class Home extends Vue {

  protected posts: object;


  public data() {
    return {
      posts: this.posts
    }
  }

  public async mounted() {
    const url = "http://dailyui.burita.me/wp/wp-json/wp/v2/posts?_embed";

    const res = await axios.get(url);
    this.posts = res.data;

    console.log(this.posts);
  }

}
