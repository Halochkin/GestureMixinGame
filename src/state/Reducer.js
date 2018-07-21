import {JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";

export class Reducer {

  static startState(state) {
    state = JoiGraph.setIn(state, "Y", 27);
    state = JoiGraph.setIn(state, "targetCenterX", state.targetX + 200);
    state = JoiGraph.setIn(state, "targetCenterY", state.targetY + 235);
    return state
  }

  static pickerRotation(state, detail) {
    state = JoiGraph.setIn(state, "rotatioN", state.rotatioN + detail.rotation * 5);
    return state;
  }

  static pickerSettings(state, detail) {
    state = JoiGraph.setIn(state, "newX", state.startX + detail.distX);
    state = JoiGraph.setIn(state, "newY", state.startY + detail.distY);
    state = JoiGraph.setIn(state, "rotatioN", 0);
    return state;
  }

  static xDiff(targetX, shurikX) {
    return Math.abs(targetX - shurikX - 300);
  }

  static yDiff(targetY, shurikY) {
    return Math.abs(targetY - shurikY - 300);
  }

  static controlReducer(state) {
    let diff = (state.xdiff + state.ydiff) / 2;
    console.log(state.xdiff + " state.xdiff");
    console.log(state.ydiff + "  state.ydiff");
    console.log(diff);
    let score;
    if (diff < 10) {
      state = JoiGraph.setIn(state, "scores", state.scores + 10);

    }
    if (diff < 50 && diff > 11) {
      state = JoiGraph.setIn(state, "scores", state.scores + 7);

    }
    if (diff < 100 && diff > 51) {
      state = JoiGraph.setIn(state, "scores", state.scores + 5);

    }
    if (diff < 130 && diff > 100) {
      state = JoiGraph.setIn(state, "scores", state.scores + 1);
    }
    state = JoiGraph.setIn(state, "throws", state.throws - 1);
    if (state.throws === 0) {
      state = JoiGraph.setIn(state, "scores", 0);
      state = JoiGraph.setIn(state, "throws", 10);
      document.location.reload();
    }
    return state;
  }


}