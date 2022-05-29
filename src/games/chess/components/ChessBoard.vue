<template>
  <div class="chess-board">
    <div class="board-row" :key="x" v-for="x in ROWS">
      <div class="board-column" :key="y" v-for="y in COLUMNS">
        <ChessBoardCell :cellX="x" :cellY="y" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { InitialGamePlays, PotentialGamePlays } from "../configs/GamePlays";
import { Options, Vue } from "vue-class-component";
import ChessBoardCell from "./ChessBoardCell.vue";
import { gameManager } from "@/managers/GameManager";

@Options({
  components: {
    ChessBoardCell,
  },
  props: {},
  created() {
    this.game.gamePlay.board =
      this.game.players[0].id === "player-1"
        ? InitialGamePlays
        : PotentialGamePlays;
  },
})
export default class ChessBoard extends Vue {
  ROWS = ["8", "7", "6", "5", "4", "3", "2", "1"];
  COLUMNS = ["h", "g", "f", "e", "d", "c", "b", "a"];
  game = gameManager.game;
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
