<template>
  <div :class="`chess-board-cell ${cellClass}`">
    <div v-if="cellY == 'a'" class="row-identifier">{{ cellX }}</div>
    <div v-if="cellX == '1'" class="column-identifier">{{ cellY }}</div>
    <ChessPiece :piece="cellPiece" />
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { GamePlayType } from "../types/ChessTypes";
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
    gamePlays: {
      type: Object as PropType<GamePlayType>,
      require: true,
    },
  },
})
export default class ChessBoardCell extends Vue {
  cellX!: string;
  cellY!: string;
  gamePlays!: GamePlayType;

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
    return this.gamePlays[this.cellType];
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
  bottom: 4px;
  left: 2px;
  font-weight: 500;
}
.column-identifier {
  position: absolute;
  top: 2px;
  right: 4px;
  font-weight: 500;
}
.black {
  background-color: #369333;
}
.white {
  background-color: #fffeee;
}
</style>
