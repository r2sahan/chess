<template>
  <div class="chess-content">
    <ChessLogs :logs="chessManager.logs" />
    <div class="chess-board">
      <div class="board-row" :key="row" v-for="row in ROWS">
        <div class="board-column" :key="column" v-for="column in COLUMNS">
          <ChessBoardCell :cellRow="row" :cellColumn="column" />
        </div>
      </div>
    </div>
    <ChessEliminatedPieces :pieces="chessManager.eliminatedPieces" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { GameManager } from "@/managers/GameManager";
import { ChessManager } from "../managers/ChessManager";
import { COLUMNS, ROWS } from "../configs/GameConstants";
import ChessBoardCell from "./ChessBoardCell.vue";
import ChessEliminatedPieces from "./ChessEliminatedPieces.vue";
import ChessLogs from "./ChessLogs.vue";

@Options({
  components: {
    ChessBoardCell,
    ChessEliminatedPieces,
    ChessLogs,
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
  game = GameManager.getInstance().currentGame;

  get chessManager() {
    return this.game.gamePlayManager as ChessManager;
  }
}
</script>

<style scoped>
.chess-content {
  display: flex;
}
.chess-board {
  display: block;
  border: 1px solid black;
  width: 640px;
  margin: 0 10px;
}
.board-column {
  display: flex;
}
.board-row {
  display: flex;
}
</style>
