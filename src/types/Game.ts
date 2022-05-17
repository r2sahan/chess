import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date | null;
  active: boolean;
  players: Player[];
}
