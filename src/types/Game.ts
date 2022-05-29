import { GamePlayeManager } from "./GamePlayeManager";
import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  active: boolean;
  players: Player[];
  gamePlayManager?: GamePlayeManager;
}
