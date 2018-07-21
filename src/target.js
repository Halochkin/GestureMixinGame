export class GameTarget extends (HTMLElement) {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.marginLeft = joiStore.state.targetX + "px";
    this.style.marginTop = joiStore.state.targetY + "px";
  }
}

customElements.define("game-target", GameTarget);