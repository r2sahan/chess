import { PLAYERS_DATA } from "@/data/PlayersData";
import { Game } from "@/types/Game";
import { Time } from "@/util/Time";

class GameManager {
  private static instance: GameManager;
  private _game!: Game;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameManager();
    }
    return this.instance;
  }

  startGame(gameReference: string) {
    this._game = {
      id: gameReference,
      name: "First Game",
      startTime: Time.getCurrentDate(),
      active: true,
      players: PLAYERS_DATA.slice(0, 2),
      gamePlay: {},
    };
  }

  endGame() {
    this._game.endTime = Time.getCurrentDate();
    this._game.gamePlay = {};
    GameManager.instance = new GameManager();
  }

  get game() {
    return this._game;
  }
}

export const gameManager = GameManager.getInstance();
