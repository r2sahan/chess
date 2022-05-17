<template>
  <div class="player">
    <div><b>Name:</b> {{ player.name }}</div>
    <div><b>ID:</b> {{ player.id }}</div>
    <div><b>Score:</b> {{ player.score }}</div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { Player } from "@/types/Player";

@Options({
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    },
  },
})
export default class PlayerCard extends Vue {
  player!: Player;
}
</script>

<style scoped>
.player {
  width: 200px;
  height: auto;
  border: 1px solid black;
  padding: 10px 0;
}
</style>
