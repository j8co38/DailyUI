import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {

  @Prop()
  protected name: string;
}
