<template>
  <div class="watcher">
    <div><b>Name:</b> {{ watcher.name }}</div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { Watcher } from "@/types/Watcher";

@Options({
  props: {
    watcher: {
      type: Object as PropType<Watcher>,
      required: true,
    },
  },
})
export default class WatcherCard extends Vue {
  watcher!: Watcher;
}
</script>

<style scoped>
.watcher {
  width: 200px;
  height: auto;
  border: 1px solid black;
  padding: 5px 0;
}
</style>
