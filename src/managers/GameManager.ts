import { Game } from "@/types/Game";

class GameManager {
  private static instance: GameManager;
  private _game!: Game;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameManager();
    }
    return this.instance;
  }

  startGame(game: Game) {
    this._game = game;
  }

  get game() {
    return this._game;
  }
}

export const gameManager = GameManager.getInstance();
