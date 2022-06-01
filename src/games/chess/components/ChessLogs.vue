<template>
  <div class="chess-logs">
    <div :key="log" v-for="log in logs">
      {{ log }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    logs: {
      type: Array,
      required: true,
      default: [],
    },
  },
})
export default class ChessLogs extends Vue {
  logs!: string[];
}
</script>

<style scoped>
.chess-logs {
  display: block;
  width: 150px;
  font-size: small;
  text-align: right;
  height: 640px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  direction: rtl;
}
</style>
