<template>
  <div class="board">
    <ChessBoard :game="game" />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import ChessBoard from "@/games/ChessBoard.vue";
import { Game } from "@/types/Game";

@Options({
  components: {
    ChessBoard,
  },
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
})
export default class Board extends Vue {
  game!: Game;
}
</script>

<style scoped>
.board {
  flex: 1;
  height: auto;
}
</style>
