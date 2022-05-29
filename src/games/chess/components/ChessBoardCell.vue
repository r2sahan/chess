<template>
  <div :class="`chess-board-cell ${cellClass}`" @click="onSelect">
    <div v-if="cellY == 'a'" class="row-identifier">{{ cellX }}</div>
    <div v-if="cellX == '1'" class="column-identifier">{{ cellY }}</div>
    <ChessPiece :piece="cellPiece" />
  </div>
</template>

<script lang="ts">
import { gameManager } from "@/managers/GameManager";
import { Options, Vue } from "vue-class-component";
import ChessPiece from "./ChessPiece.vue";

@Options({
  components: {
    ChessPiece,
  },
  props: {
    cellX: {
      type: String,
      required: true,
    },
    cellY: {
      type: String,
      required: true,
    },
  },
})
export default class ChessBoardCell extends Vue {
  cellX!: string;
  cellY!: string;
  game = gameManager.game;

  get cellType() {
    return this.cellY + this.cellX;
  }

  get isEven() {
    return (+this.cellX + parseInt(this.cellY, 26)) % 2 == 0;
  }

  get cellClass() {
    return this.isEven ? "black" : "white";
  }

  get cellPiece() {
    return this.game.gamePlay.board[this.cellType];
  }

  onSelect(event: Event) {
    event.preventDefault();
    if (this.cellPiece) {
      this.game.gamePlay.selectedCellPiece = this.cellPiece;
      this.game.gamePlay.selectedCellType = this.cellType;
    } else {
      this.game.gamePlay.board[this.cellType] =
        this.game.gamePlay.selectedCellPiece;
      this.game.gamePlay.board[this.game.gamePlay.selectedCellType] = "";
    }
  }
}
</script>

<style scoped>
.chess-board-cell {
  position: relative;
  width: 80px;
  height: 80px;
}
.row-identifier {
  position: absolute;
  top: 4px;
  right: 2px;
  font-weight: 500;
}
.column-identifier {
  position: absolute;
  bottom: 2px;
  left: 4px;
  font-weight: 500;
}
.black {
  background-color: #369333;
}
.white {
  background-color: #fffeee;
}
</style>
