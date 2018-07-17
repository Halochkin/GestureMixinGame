import {JoiStore, JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {Reducer} from "./state/Reducer.js";

class ShellApp extends PinchGesture(HTMLElement) { //[1]

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    window.joiStore = new JoiStore({
      Y: 40,
    });
    joiStore.observe([""], this.render.bind(this));

    setTimeout(() => joiStore.dispatch(Reducer.xChange), 10);
  }

  render(state){
    this.shadowRoot.innerHTML =`
     <play-field></play-field>
    `
  }
}
customElements.define("shell-app", ShellApp);