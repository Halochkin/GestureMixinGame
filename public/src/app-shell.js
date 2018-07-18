import {JoiStore, JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {Reducer} from "./state/Reducer.js";

class ShellApp extends PinchGesture(HTMLElement) { //[1]

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    window.joiStore = new JoiStore({
      Y: 40,
      pickerX: 300,
      pickerY: 300,
      durationMs: 0,
      pickerRotation: 1,
    });
    joiStore.observe([""], this.render.bind(this));

    setTimeout(() => joiStore.dispatch(Reducer.xChange), 10);
  }


  render(state) {
    this.style.transition = "all " + state.durationMs + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
    this.shadowRoot.innerHTML = `
<style>
:host {
  margin-top: ${state.pickerY}px;
  margin-left: ${state.pickerX}px;
}
</style>
            <link rel="stylesheet" type="text/css" href="../style/style.css">
        <color-picker id="picker"></color-picker>
        </div>
    `;

  }

}

customElements.define("shell-app", ShellApp);