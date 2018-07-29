import Vue from "vue";
import Component from "vue-class-component";

import axios from "axios";
import { Route } from "vue-router";

import Loading from "../loading/loading";
import FooterSection from "../footer/footer";


@Component({
  components: {
    Loading,
    FooterSection
  }
})
export default class Article extends Vue {

  protected post: object;
  protected isLoading: boolean;

  public data() {
    return {
      isLoading: this.isLoading,
      post: this.post
    }
  }

  public created() {
    this.isLoading = true;
  }

  public async mounted() {
    const url = `http://dailyui.burita.me/wp/wp-json/wp/v2/posts/${this.$route.params.id}`;

    const res = await axios.get(url);
    this.post = res.data.content.rendered;

    this.isLoading = false;
  }

}
