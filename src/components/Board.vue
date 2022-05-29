<template>
  <div class="board">
    <ChessBoard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// TODO: check the following dependency
import ChessBoard from "@/games/chess/components/ChessBoard.vue";

@Options({
  components: {
    ChessBoard,
  },
  props: {},
})
export default class Board extends Vue {}
</script>

<style scoped>
.board {
  flex: 1;
  height: auto;
}
</style>
