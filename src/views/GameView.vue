<template>
  <div class="game">
    <div class="game-header">
      <GameCard :game="game" />
      <button @click="leaveGame">Leave the game</button>
    </div>
    <div class="game-content">
      <div class="players">
        <PlayerCard
          :key="player.id"
          :player="player"
          v-for="player in game.players"
        />
      </div>
      <Board :game="game" />
      <div class="watchers">
        <WatcherCard
          :key="watcher.id"
          :watcher="watcher"
          v-for="watcher in watchers"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Board from "@/components/Board.vue";
import GameCard from "@/components/GameCard.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import WatcherCard from "@/components/WatcherCard.vue";
import { Game } from "@/types/Game";
import { Watcher } from "@/types/Watcher";
import { Time } from "@/util/Time";
import { PLAYERS_DATA } from "@/data/PlayersData";
import { WATCHERS_DATA } from "@/data/WatchersData";
import { RouteLocationRaw } from "vue-router";

@Options({
  components: {
    Board,
    GameCard,
    PlayerCard,
    WatcherCard,
  },
  async created() {
    const gameReference = this.$route.params.ref as string;
    const theGame: Game = {
      id: gameReference,
      name: "First Game",
      startTime: Time.getCurrentDate(),
      endTime: null,
      active: true,
      players: PLAYERS_DATA.slice(0, 2),
    };
    this.game = theGame;
  },
  mounted() {
    this.watchers = WATCHERS_DATA.slice(0, 3);
  },
  beforeRouteLeave(
    to: RouteLocationRaw,
    from: RouteLocationRaw,
    next: () => void
  ) {
    const result = confirm(
      "You will lose the game. Are you sure to quit the game?"
    );
    if (result) {
      this.game.endTime = Time.getCurrentDate();
      next();
    }
  },
})
export default class GameView extends Vue {
  game = undefined as unknown as Game;
  watchers = [] as Watcher[];

  leaveGame() {
    this.$router.push("/lobby");
  }
}
</script>

<style scoped>
.game {
  padding: 10px;
}
.game-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.game-content {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.players {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.watchers {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
