// noinspection JSFileReferences
import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
import {PinchGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js';
import {Reducer} from "./state/Reducer.js";

class PlayField extends PinchGesture(DragFlingGesture(HTMLElement)) {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<slot></slot>`;
    // this.render();
  }


  flingCallback(detail) {
    console.log("flingCallback");
    joiStore.dispatch(Reducer.pickerCoord, detail);
  }
  draggingStartCallback(detail) {
    // console.log("draggingStartCallback");
    // this.querySelector('#picker').setAttribute("style", "display: none");
  }
}

customElements.define("color-picker", PlayField);