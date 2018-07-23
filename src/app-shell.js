import {JoiStore, JoiGraph} from "https://unpkg.com/joistate@0.0.18/src/JoiStore.js";
import {Reducer} from "./state/Reducer.js";

class ShellApp extends HTMLElement { //[1]

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    window.joiStore = new JoiStore({
      startX: (window.innerWidth - 600) / 2,
      startY: window.innerHeight - 550,
      targetX: (window.innerWidth - 400) / 2,
      targetY: window.innerHeight - (window.innerHeight - 300),
      rotatioN: 0,
      xdiff: 0,
      ydiff: 0,
      scores: 0,
      throws: 10,
      info: ""
    });
    setTimeout(() => joiStore.dispatch(Reducer.startState), 10);
    joiStore.observe(["Y"], this.render.bind(this));
    joiStore.compute(["targetCenterX", "newX"], "xdiff", Reducer.xDiff);
    joiStore.compute(["targetCenterY", "newY"], "ydiff", Reducer.yDiff);
  }


  render(state) {
    this.style.transition = "3s";
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="../style/style.css">
        <game-info></game-info>
        <game-shurikien></game-shurikien>
        <game-panel></game-panel>
        <game-target></game-target>`;
  }
  }

customElements.define("shell-app", ShellApp);