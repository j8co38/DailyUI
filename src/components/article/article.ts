import Vue from "vue";
import Component from "vue-class-component";

import { Watch } from "vue-property-decorator";

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

  protected post: any;
  protected slug: string;
  protected isLoading: boolean;
  protected prevPost: string;
  protected nextPost: string;
  protected isLatest: boolean = false;

  public data() {
    return {
      isLoading: this.isLoading,
      post: this.post,
      slug: this.slug,
      prevPost: this.prevPost,
      nextPost: this.nextPost
    }
  }

  public created() {
    this.isLoading = true;
  }

  public async mounted() {
    const url = `https://dailyui.burita.me/wp/wp-json/wp/v2/posts?slug=${this.$route.params.slug}`;

    const res = await axios.get(url);

    this.post = res.data[0].content.rendered;
    this.slug = this.$route.params.slug;

    this.isLoading = false;

    this.calcPrevNext();
    const nextPost = await axios.get(`https://dailyui.burita.me/wp/wp-json/wp/v2/posts?slug=${this.nextPost}`);
    if (!nextPost.data.length) {
      this.isLatest = true;
    }
  }

  @Watch("$route")
  protected async watchRoute() {
    this.isLoading = true;
    this.isLatest = false;

    const url = `https://dailyui.burita.me/wp/wp-json/wp/v2/posts?slug=${this.$route.params.slug}`;

    const res = await axios.get(url);

    this.post = res.data[0].content.rendered;
    this.slug = this.$route.params.slug;

    this.isLoading = false;

    this.calcPrevNext();
    const nextPost = await axios.get(`https://dailyui.burita.me/wp/wp-json/wp/v2/posts?slug=${this.nextPost}`);
    if (!nextPost.data.length) {
      this.isLatest = true;
    }
  }

  protected calcPrevNext() {
    const prev = Number(`${this.slug}`) - 1;
    const next = Number(`${this.slug}`) + 1;

    if (next === 100) {
      this.nextPost = String(next);
    }

    if (prev < 10) {
      this.prevPost = "00" + String(prev);
    } else {
      this.prevPost = "0" + String(prev);
    }

    if (next < 10) {
      this.nextPost = "00" + String(next);
    } else {
      this.nextPost = "0" + String(next);
    }
  }

}
