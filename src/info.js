export class GameInfo extends (HTMLElement) {
  constructor() {
    super();
    joiStore.observe([""], this.infoDisplay.bind(this));
  }

  infoDisplay() {
    this.style.display = joiStore.state.info;
  }
}

customElements.define("game-info", GameInfo);