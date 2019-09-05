<template>
  <div id="particles-js"></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {},

    mounted(): void {
      if (process.client) {
        require('particles.js/particles')
        const _window: any = window
        // https://vincentgarreau.com/particles.js/#default
        // ↑ここからデザイン変えられる
        _window.particlesJS.load('particles-js', '/particlesjs-config.json', () => {
          console.log('particlesJS is loaded')
        })
      }
    }
  })
  export default class RacingBackground extends Vue {
  }
</script>

<style scoped>
  #particles-js {
    background-color: #121624;
  }
</style>
