import {JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";

export class Reducer {


  static startState(state) {
    state = JoiGraph.setIn(state, "Y", 27);
    state = JoiGraph.setIn(state, "targetCenterX", state.targetX + 200);
    state = JoiGraph.setIn(state, "targetCenterY", state.targetY + 200);
    return state
  }


  static pickerRotation(state, detail) {
    state = JoiGraph.setIn(state, "rotatioN", state.rotatioN + detail.rotation);
    // state = JoiGraph.setIn(state, "rotationDuration", state.rotationDuration + detail.duration);
    return state;
  }

  static pickerSettings(state, detail) {
    state = JoiGraph.setIn(state, "newX", state.startX + detail.distX);
    state = JoiGraph.setIn(state, "newY", state.startY + detail.distY);
    return state;
  }

  static xDiff(targetX, shurikX) {
    return Math.abs(targetX - shurikX);
  }

  static yDiff(targetY, shurikY) {
    return Math.abs(targetY - shurikY);
  }

  static controlReducer(state) {
    let diff = (state.xdiff + state.ydiff) / 2;
    console.log(diff);
    let score;
    if (diff < 10) {
      score = 10;
    }
    if (diff < 50 && diff > 11) {
      score = 7;
    }
    if (diff < 100 && diff > 51) {
      score = 5;
    }
    if (diff < 250 && diff > 101) {
      score = 3;
    } else {
      score = 0;
    }
    state = JoiGraph.setIn(state, "scores", state.scores + score);
    state = JoiGraph.setIn(state, "throws", state.throws - 1);

   if(state.throws===0){
     state = JoiGraph.setIn(state, "scores", 0);
     state = JoiGraph.setIn(state, "throws", 10);
   }
    return state;
  }


}