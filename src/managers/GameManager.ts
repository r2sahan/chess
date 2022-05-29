import { PLAYERS_DATA } from "@/data/PlayersData";
import { Game } from "@/types/Game";
import { GamePlayeManager } from "@/types/GamePlayeManager";
import { Time } from "@/util/Time";

export class GameManager {
  private static instance?: GameManager;
  private game!: Game;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameManager();
    }
    return this.instance;
  }

  startGame(gameReference: string) {
    this.game = {
      id: gameReference,
      name: "First Game",
      startTime: Time.getCurrentDate(),
      active: true,
      players: PLAYERS_DATA.slice(0, 2),
    };
  }

  endGame() {
    this.game.endTime = Time.getCurrentDate();
    this.game.gamePlayManager = undefined;
  }

  get currentGame() {
    return this.game;
  }

  isFirstUser(playerId: string) {
    return this.game.players[0].id === playerId;
  }

  setGamePlayManager(gamePlayManager: GamePlayeManager) {
    this.game.gamePlayManager = gamePlayManager;
  }
}
