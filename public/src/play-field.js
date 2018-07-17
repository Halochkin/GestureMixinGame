import {DragFlingGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js";
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";

class PlayField extends DragFlingGesture(PinchGesture(HTMLElement)) {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.render();
  }

  draggingCallback(ee){
    console.log(ee);
  }

  render() {
    this.shadowRoot.innerHTML = `
 <link rel="stylesheet" type="text/css" href="../style/style.css"/>
<div id="playfield">
    <section class="chart">
        <div class="triangle" style="transform:rotate(   0deg)">
            <div class="circle" style="background:#ff7f00"></div>
        </div>
        <div class="triangle" style="transform:rotate( -90deg)">
            <div class="circle" style="background:#ff0000"></div>
        </div>
        <div class="triangle" style="transform:rotate(-180deg)">
            <div class="circle" style="background:#9400d3"></div>
        </div>
        <div class="triangle" style="transform:rotate(-270deg)">
            <div class="circle" style="background:#4b0082"></div>
        </div>
    </section>
</div>
    `
  }
}

customElements.define("play-field", PlayField);