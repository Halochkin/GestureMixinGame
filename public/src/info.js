import {Reducer} from "./state/Reducer.js";

export class GameInfo extends (HTMLElement) {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.display = newValue;
  }

  static refresh() {
    this.innerText = `${joiStore.state.scores}`;
  }

  //  render() {
  //    this.shadowRoot.innerHTML = `
  // <link rel="stylesheet" type="text/css" href="../style/style.css">
  //    <div>SCORES: ${joiStore.state.scores}</div>
  //    `
  //  }

}

customElements.define("game-info", GameInfo);