import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
import {Reducer} from "./state/Reducer.js";

class GameShurik extends PinchGesture(DragFlingGesture(HTMLElement)) {
  constructor() {
    super();
    // this.attachShadow({mode: "open"});
    this.spinEvent = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.marginTop = joiStore.state.startY + "px";
    this.style.marginLeft = joiStore.state.startX + "px";
  }

  flingCallback(detail) {
    if (!this.spinEvent) {
      joiStore.dispatch(Reducer.infoReducer, "block");
    } else {
      joiStore.dispatch(Reducer.pickerSettings, detail);
      joiStore.dispatch(Reducer.controlReducer);
      joiStore.dispatch(Reducer.infoReducer, "none");
      this.style.transition = "all " + detail.durationMs + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
      this.style.marginTop = joiStore.state.newY + "px";
      this.style.marginLeft = joiStore.state.newX + "px";
      this.style.transform = `scale(0.2) rotateX(-75deg) rotate(${joiStore.state.rotatioN}deg`;
      setTimeout(this.checkFunc(), detail.durationMs);
    }
  }

  spinCallback(detail) {
    // alert(detail.lastspinMotion);
    this.spinEvent = true;
    this.style.transition = "all " + 5 + "s cubic-bezier(0.39, 0.58, 0.57, 1)";
    setInterval(() => joiStore.dispatch(Reducer.pickerRotation, detail), 50);
    this.style.transform = `rotateZ(${joiStore.state.rotatioN}deg `;
  }

  checkFunc() {
    let elem = document.createElement("game-shurikien");
    let shell = document.querySelector("shell-app");
    let element = shell.shadowRoot.querySelectorAll("game-shurikien");
    setTimeout(function () {
      shell.shadowRoot.appendChild(elem);
    }, 300);
    if (joiStore.state.throws <= 0) {
      let t = shell.shadowRoot.children.length;
      for (let index = 0, len = element.length; index < len; index++) {
        element[index].parentNode.removeChild(element[index]);
      }
    }
  }
}

customElements.define("game-shurikien", GameShurik);