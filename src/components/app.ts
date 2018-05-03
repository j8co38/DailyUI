import Vue from "vue";
import Component from "vue-class-component";

import Card from "./card";
import FormArea from "./form-area";


interface FormData {
  [key: string]: string | undefined;
  name?: string;
}

interface InputEvent extends Event {
  target: HTMLInputElement;
}

@Component({
  components: {
    Card,
    FormArea
  }
})
export default class App extends Vue {

	// protected name: string = "";

	protected formData: FormData = {
		name: undefined
  };

  protected displayData: FormData = {
    name: undefined
  };


	protected handleOnChange(event: InputEvent) {

		const { value, name } = event.target;
    this.formData[name] = value;

    console.log(this.formData);

	}

	protected handleButtonClick() {

    this.displayData = this.formData;

		console.log("click");

  }

}
