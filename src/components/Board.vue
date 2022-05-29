<template>
  <div class="board">
    <ChessBoard :game="game" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// TODO: check the following dependency
import ChessBoard from "@/games/chess/components/ChessBoard.vue";
import { gameManager } from "@/managers/GameManager";

@Options({
  components: {
    ChessBoard,
  },
  props: {},
})
export default class Board extends Vue {
  game = gameManager.game;
}
</script>

<style scoped>
.board {
  flex: 1;
  height: auto;
}
</style>
