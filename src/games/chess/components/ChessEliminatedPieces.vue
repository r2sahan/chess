<template>
  <div class="chess-eliminated-pieces">
    <div class="chess-piece-content" :key="piece" v-for="piece in pieces">
      <ChessPiece :piece="piece" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChessPiece from "./ChessPiece.vue";

@Options({
  components: {
    ChessPiece,
  },
  props: {
    pieces: {
      type: Array,
      required: true,
      default: [],
    },
  },
})
export default class ChessEliminatedPieces extends Vue {
  pieces!: string[];
}
</script>

<style scoped>
.chess-eliminated-pieces {
  width: 70px;
  height: 640px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  text-align: left;
}
.chess-piece-content {
  padding: 0;
  margin: 0;
}
</style>
