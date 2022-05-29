import { GamePlayType } from "./GamePlayType";
import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  active: boolean;
  players: Player[];
  gamePlay: GamePlayType;
}
