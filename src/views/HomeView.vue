<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <WelcomePage msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WelcomePage from "@/components/WelcomePage.vue";

@Options({
  components: {
    WelcomePage,
  },
})
export default class HomeView extends Vue {}
</script>
