import Vue from "vue";
import Component from "vue-class-component";

import axios from "axios";

import Loading from "../loading/loading";
import FooterSection from "../footer/footer";


@Component({
  components: {
    Loading,
    FooterSection
  }
})
export default class Home extends Vue {

  protected posts: object;
  protected isLoading: boolean;

  public data() {
    return {
      posts: this.posts,
      isLoading: this.isLoading
    }
  }

  public created() {
    this.isLoading = true;
  }

  public async mounted() {
    const url = "https://dailyui.burita.me/wp/wp-json/wp/v2/posts?_embed";

    const res = await axios.get(url);
    this.posts = res.data;

    this.isLoading = false;
  }

}
