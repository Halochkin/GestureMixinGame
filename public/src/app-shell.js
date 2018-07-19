import {JoiStore, JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
import {Reducer} from "./state/Reducer.js";
import {GameTarget} from "./target.js";

class ShellApp extends PinchGesture(DragFlingGesture(HTMLElement)) { //[1]

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    window.joiStore = new JoiStore({
      view: "small",
      Y: 40,
      pickerX: 400,
      pickerY: 420,
      durationMs: 0,
      rotation: 1,
    });
    joiStore.observe([""], this.render.bind(this));
    setTimeout(() => joiStore.dispatch(Reducer.xChange), 10);
    this.spinEvent = false;
  }

  render(state) {
    this.shadowRoot.innerHTML = `
          <style>
            :host{
              margin-top: ${state.pickerY}px;
              margin-left: ${state.pickerX}px;
            }
          </style>
        <link rel="stylesheet" type="text/css" href="../style/style.css">
        <div id="shuriken" style="transform: rotateX(-60deg) rotateZ(${state.rotation}deg);"></div>`;
  }


  flingCallback(detail) {
    if (!this.spinEvent) {
      document.querySelector("game-info").setAttribute("message", "block");
    } else {
      document.querySelector("game-info").setAttribute("message", "none");
      this.style.transition = "all " + 1 + "s cubic-bezier(0.39, 0.58, 0.57, 1)";
      this.style.transform = `scale(0.0) rotateX(-75deg)`;
      joiStore.dispatch(Reducer.pickerSettings, detail);
      setTimeout(function () {
        GameTarget.repeatFunc()
      },1000)
    }
  }

  spinCallback(detail) {
    this.spinEvent = true;
    this.style.transition = "all " + detail.durationMs + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
    setInterval(() => joiStore.dispatch(Reducer.pickerRotation, detail), 30);
  }

}

customElements.define("shell-app", ShellApp);