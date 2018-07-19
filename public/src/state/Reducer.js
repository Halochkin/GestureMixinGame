import {JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";

export class Reducer {


  static xChange(state) {
    state = JoiGraph.setIn(state, "Y", 22);
    return state
  }

  static pickerCoord(state, detail) {

    state = JoiGraph.setIn(state, "durationMs", detail.durationMs);
    return state;
  }


  static pickerRotation(state, detail) {
    state = JoiGraph.setIn(state, "rotation", state.rotation + detail.rotation);
    return state;
  }

  static pickerSettings(state, detail) {
    state = JoiGraph.setIn(state, "pickerX", state.pickerX + detail.distX * 1.7);
    state = JoiGraph.setIn(state, "pickerY", state.pickerY + detail.distY * 1.7);
    state = JoiGraph.setIn(state, "rotateX", -75);
    return state;
  }


}