import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class FormArea extends Vue {

	@Prop({ type: Function })
  protected onClick: () => Event;

  @Prop({ type: Function })
  protected onChange: () => Event;

}
