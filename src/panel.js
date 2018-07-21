
 export class GamePanel extends (HTMLElement) {
  constructor() {
    super();
    joiStore.observe([""], this.refresh.bind(this));
  }


refresh(state) {
    this.innerHTML =`
        <h3 id="throws">THROWS: ${joiStore.state.throws}</h3>
        <h3 id="scores">SCORES: ${joiStore.state.scores}</h3>`;
  }
}

customElements.define("game-panel", GamePanel);