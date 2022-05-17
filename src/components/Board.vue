<template>
  <div class="board">
    <ChessBoard :game="game" />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
// TODO: check dependency
import ChessBoard from "@/games/chess/components/ChessBoard.vue";
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
