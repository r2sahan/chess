<template>
  <div
    :class="`chess-board-cell ${cellBackground} ${cellSelected}`"
    @click="onSelect"
  >
    <div v-if="cellColumn == 'a'" class="row-identifier">{{ cellRow }}</div>
    <div v-if="cellRow == '1'" class="column-identifier">{{ cellColumn }}</div>
    <ChessPiece :piece="piece" />
  </div>
</template>

<script lang="ts">
import { GameManager } from "@/managers/GameManager";
import { Options, Vue } from "vue-class-component";
import { ChessManager } from "../managers/ChessManager";
import ChessPiece from "./ChessPiece.vue";

@Options({
  components: {
    ChessPiece,
  },
  props: {
    cellRow: {
      type: String,
      required: true,
    },
    cellColumn: {
      type: String,
      required: true,
    },
  },
  created() {
    this.cellBackground = this.isEven ? "black" : "white";
  },
})
export default class ChessBoardCell extends Vue {
  cellBackground = "";
  cellRow!: string;
  cellColumn!: string;
  game = GameManager.getInstance().currentGame;

  get chessManager() {
    return this.game.gamePlayManager as ChessManager;
  }

  get cell() {
    return this.cellColumn + this.cellRow;
  }

  get isEven() {
    return (+this.cellRow + parseInt(this.cellColumn, 26)) % 2 == 0;
  }

  get piece() {
    return this.chessManager.getPiece(this.cell);
  }

  // TODO: more efficient with selected dom element
  get cellSelected() {
    return this.chessManager.isSelected(this.cell) ? "selected" : "";
  }

  onSelect(event: Event) {
    event.preventDefault();
    this.chessManager.move(this.piece, this.cell);
  }
}
</script>

<style scoped>
.chess-board-cell {
  position: relative;
  width: 60px;
  height: 60px;
  padding: 10px;
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
.selected {
  box-shadow: 3px 3px inset;
}
</style>
