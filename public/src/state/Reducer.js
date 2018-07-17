import {JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";

export class Reducer {


  static xChange(state) {
    state = JoiGraph.setIn(state, "Y", 22);
    return state
  }


}