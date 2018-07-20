import {Reducer} from "./state/Reducer.js";

export class GameTarget extends (HTMLElement) {
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});
    // this.render();
  }

  connectedCallback() {
    this.style.marginLeft = joiStore.state.targetX + "px";
    this.style.marginTop = joiStore.state.targetY + "px";

  }

  static get observedAttributes() {
    return ['message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.display = newValue;
  }

}

customElements.define("game-target", GameTarget);