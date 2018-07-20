import {JoiStore, JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
import {Reducer} from "./state/Reducer.js";
import {GameInfo} from "./info.js";

class ShellApp extends (HTMLElement) { //[1]

  constructor() {
    super();
    // this.attachShadow({mode: "open"});
    window.joiStore = new JoiStore({
      startX: (window.innerWidth - 500) / 2,
      startY: window.innerHeight - 550,
      targetX: (window.innerWidth - 500) / 2,
      targetY: window.innerHeight - (window.innerHeight - 300),
      rotatioN: 0,
      xdiff: undefined,
      ydiff: undefined,
      scores: 0,
      throws: 10,
    });
    setTimeout(() => joiStore.dispatch(Reducer.startState), 10);
    joiStore.observe(["Y"], this.render.bind(this));


    joiStore.compute(["targetCenterX", "newX"], "xdiff", Reducer.xDiff);
    joiStore.compute(["targetCenterY", "newY"], "ydiff", Reducer.yDiff);

    this.spinEvent = false;
  }

  render(state) {
    this.style.transition = "3s";

    this.innerHTML = `

        <link rel="stylesheet" type="text/css" href="../style/style.css">
        <game-panel></game-panel>
        <game-info></game-info>
        <game-shurikien></game-shurikien>
        <game-target></game-target>
     
`;
  }


  // flingCallback(detail) {
  //   // if (!this.spinEvent) {
  //   //   document.querySelector("game-info").setAttribute("message", "block");
  //   // } else {
  //   // document.querySelector("game-info").setAttribute("message", "none");
  //   // this.style.transition = "all "  + (detail.durationMs*3) + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
  //   // this.style.transform = `scale(0.01) rotateX(-75deg)`;
  //
  //   // this.style.transform = `rotate(${prevSpinAngle + e.detail.rotation * 5}deg)`;
  //   this.style.backgroundColor = "yellow";
  //   this.style.transition = "1s";
  //   this.innerText = "FLING";
  //   this.style.transition = "0.3s";
  //
  //
  //   // joiStore.dispatch(Reducer.pickerSettings, detail);
  //
  //
  //
  // }

  // spinCallback(detail) {
  //   this.spinEvent = true;
  //   this.style.transition = "all " + detail.durationMs + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
  //   setInterval(() => joiStore.dispatch(Reducer.pickerRotation, detail), 30);
  // }
}

customElements.define("shell-app", ShellApp);