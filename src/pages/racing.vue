<template>
  <v-content class="main-wrapper">
    <v-container fluid class="main-container">
      <v-layout align-space-around justify-space-around row fill-height>
        <v-flex xs2>
          <course-detail :course-num="1" course-color="red" />
        </v-flex>
        <v-flex xs8>
          <ranking />
        </v-flex>
        <v-flex xs2>
          <course-detail :course-num="2" course-color="blue" />
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
  import io from 'socket.io-client'
  import RacingBackground from '~/components/RacingBackground.vue'
  import CourseDetail from '~/components/racing/CourseDetail.vue'
  import Ranking from '~/components/racing/Ranking.vue'

  @Component({
    layout: 'empty',
    components: { Ranking, CourseDetail, RacingBackground }
  })
  export default class RacingPage extends Vue {
    socket!: SocketIOClient.Socket

    mounted() {
      if (process.server) {
        return
      }

      const API_URL: string = process.env.API_URL || '/'
      this.socket = io.connect(API_URL)
      this.socket.on('connection', () => {
        console.log('connection')
      })
      this.socket.on('message', (msg) => {
        console.log('recieved message:', msg)
      })
    }
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
