
 export class GamePanel extends (HTMLElement) {
  constructor() {
    super();
  }


  static refresh() {
    this.innerText = `${joiStore.state.scores}`;
  }

}

customElements.define("game-panel", GamePanel);