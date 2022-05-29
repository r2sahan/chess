import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  active: boolean;
  players: Player[];
  gamePlay: {[key: string]: any};
}
