<template>
  <div class="chess-board">
    <div class="board-row" :key="x" v-for="x in ROWS">
      <div class="board-column" :key="y" v-for="y in COLUMNS">
        <ChessBoardCell :cellX="x" :cellY="y" :gamePlays="gamePlays" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { InitialGamePlays, PotentialGamePlays } from "@/configs/GamePlays";
import { GamePlayType } from "@/types/ChessTypes";
import { Game } from "@/types/Game";
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import ChessBoardCell from "./ChessBoardCell.vue";

@Options({
  components: {
    ChessBoardCell,
  },
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
  created() {
    this.gamePlays =
      this.game.players[0].id === "player-2"
        ? InitialGamePlays
        : PotentialGamePlays;
  },
})
export default class ChessBoard extends Vue {
  ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];
  COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
  game!: Game;
  gamePlays?: GamePlayType;
}
</script>

<style scoped>
.chess-board {
  display: block;
  border: 1px solid black;
  width: 640px;
  margin: 0 auto;
}
.board-column {
  display: flex;
}
.board-row {
  display: flex;
}
</style>
