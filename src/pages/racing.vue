<template>
  <v-content class="main-wrapper">
    <v-container fluid class="main-container">
      <v-layout align-space-around justify-space-around row fill-height>
        <v-flex xs4>
          aaa
        </v-flex>
        <v-flex xs4>
          bbb
        </v-flex>
        <v-flex xs4>
          ccc
        </v-flex>
      </v-layout>
    </v-container>
    <no-ssr>
      <racing-background class="background" />
    </no-ssr>
  </v-content>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import RacingBackground from '~/components/RacingBackground.vue'

  @Component({
    layout: 'empty',
    components: { RacingBackground },

    mounted(): void {
    }
  })
  export default class RacingPage extends Vue {
  }
</script>

<style scoped lang="stylus">
  .main-wrapper {
    position: relative;
    width: 100%;

    .main-container {
      position: relative;
      z-index: 114;
    }

    .background {
      position: absolute;
      z-index: 0;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
