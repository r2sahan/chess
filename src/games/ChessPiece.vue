<template>
  <div v-if="piece" class="chess-piece">
    <img :src="pieceImage" width="50" height="50" />
  </div>
</template>

<script lang="ts">
import { PieceImages } from "@/configs/PieceImages";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    piece: {
      type: String,
      require: true,
    },
  },
})
export default class ChessPiece extends Vue {
  piece!: string;

  get pieceImage() {
    return PieceImages[this.piece];
  }
}
</script>

<style scoped>
.chess-piece {
  padding: 15px 10px;
}
</style>
