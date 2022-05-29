<template>
  <div class="chess-board">
    <div class="board-row" :key="row" v-for="row in ROWS">
      <div class="board-column" :key="column" v-for="column in COLUMNS">
        <ChessBoardCell :cellRow="row" :cellColumn="column" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChessBoardCell from "./ChessBoardCell.vue";
import { GameManager } from "@/managers/GameManager";
import { ChessManager } from "../managers/ChessManager";
import { COLUMNS, ROWS } from "../configs/GameConstants";

@Options({
  components: {
    ChessBoardCell,
  },
  props: {},
  created() {
    const gameManager = GameManager.getInstance();
    const isFirstUser = gameManager.isFirstUser("player-1");
    gameManager.setGamePlayManager(new ChessManager(isFirstUser));
  },
})
export default class ChessBoard extends Vue {
  ROWS = ROWS;
  COLUMNS = COLUMNS;
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
