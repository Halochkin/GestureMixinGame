// import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
// import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
// import {Reducer} from "./state/Reducer.js";
//
//  class GameShurik extends PinchGesture(DragFlingGesture(HTMLElement)) {
//   constructor() {
//     super();
//     // this.attachShadow({mode: 'open'});
//   }
//
//
//   flingCallback(detail) {
//     if (!this.spinEvent) {
//       // this.shadowRoot.querySelector("game-info").setAttribute("message", "block");
//     } else {
//       console.log("flingCallback");
//       // this.shadowRoot.querySelector("game-info").setAttribute("message", "none");
//       // this.style.transition = "all " + 1 + "s cubic-bezier(0.39, 0.58, 0.57, 1)";
//       // this.style.transform = `scale(0.0) rotateX(-75deg)`;
//       joiStore.dispatch(Reducer.pickerSettings, detail);
//       setTimeout(function () {
//         GameTarget.repeatFunc()
//       }, 1000)
//     }
//   }
//
//   spinCallback(detail) {
//     this.spinEvent = true;
//     this.style.transition = "all " + detail.durationMs + "ms cubic-bezier(0.39, 0.58, 0.57, 1)";
//     setInterval(() => joiStore.dispatch(Reducer.pickerRotation, detail), 30);
//     // setTimeout(GameTarget.repeatFunc(), 5000)
//   }
//
//
// }
//
// customElements.define("game-shurikien", GameShurik);