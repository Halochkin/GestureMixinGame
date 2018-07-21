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
}

customElements.define("game-info", GameInfo);