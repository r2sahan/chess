<template>
  <div class="game-card">
    <p>{{ game.name }}: {{ game.id }}</p>
    <p>Started at: {{ game.startTime.toUTCString() }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { Game } from "@/types/Game";

@Options({
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
})
export default class GameCard extends Vue {
  game!: Game;
}
</script>

<style scoped>
.game-card {
  flex: 0 0 250px;
  height: auto;
  border: 1px solid black;
  text-align: left;
  padding-left: 10px;
}
</style>
