import {Reducer} from "./state/Reducer.js";

export class GameTarget extends (HTMLElement) {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // this.render();
  }

  static get observedAttributes() {
    return ['message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.display = newValue;
  }

  static repeatFunc() {
    // document.getElementById("hand").style.transform = "translate(50px)";
    // let a = document.querySelector("shell-app");
    // let list = document.getElementById("shuriken");
    // let shuriken = document.removeChild(a);


    // shuriken.style.marginLeft = "420px";
    // shuriken.style.marginTop = "400px";
    // shuriken.style.scale = "1";
  }
}

customElements.define("game-target", GameTarget);