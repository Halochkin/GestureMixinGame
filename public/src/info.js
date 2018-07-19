import {Reducer} from "./state/Reducer.js";

class GameInfo extends (HTMLElement) {
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});
    // this.render();
  }

  static get observedAttributes() {
    return ['message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.display = newValue;
  }


 //  render() {
 //    this.shadowRoot.innerHTML = `
 // <link rel="stylesheet" type="text/css" href="../style/style.css">
 //    <div id="ninja"></div>
 //    `
 //  }

}

customElements.define("game-info", GameInfo);