
<template>
  <div class="about">
    <h1>Es ist ein über Seite</h1>
    <h1>Staat Rads: {{ this.$store.state.myMod.wheels }}</h1>
    <h1>Getter getAxes: {{ this.$store.getters.getAxes }}</h1>
    <v-btn 
      color="info" 
      @click="fetchNewWheels"> Dispatch action </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import store from "@/store";

@Component
export default class About extends Vue {
  private async fetchNewWheels() {
    await store.dispatch("fetchNewWheels", 2);
  }
}
</script>
