<template>
  <div class="about">
    <h1>This is the lobby page</h1>
    <button @click="findAGame">Find a game</button>
    <h3>Game list</h3>
    <div v-if="games.length === 0">
      <p>No games</p>
    </div>
    <div v-else class="game-list">
      <GameCard :key="game.id" :game="game" v-for="game in games" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Game } from "@/types/Game";
import GameCard from "@/components/GameCard.vue";
import { GAMES_DATA } from "@/data/GamesData";

@Options({
  components: {
    GameCard,
  },
  async created() {
    this.games = GAMES_DATA;
  },
})
export default class LobbyView extends Vue {
  games = [] as Game[];

  async findAGame() {
    const gameReference = "asdf-123";
    this.$router.push(`/game/${gameReference}`);
  }
}
</script>

<style scoped>
.game-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}
</style>
