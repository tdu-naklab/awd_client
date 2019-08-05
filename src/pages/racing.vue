<template>
  <v-content class="main-wrapper">
    <v-container fluid class="main-container">
      <v-layout align-space-around justify-space-around row fill-height>
        <v-flex xs3 class="lane-1">
          <course-detail :course-num="1" course-color="red" :race-data="course1" />
        </v-flex>
        <v-flex xs5>
          <ranking-component :contents="ranking" />
        </v-flex>
        <v-flex xs3 class="lane-2">
          <course-detail :course-num="2" course-color="blue" :race-data="course2" />
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
  import RankingComponent from '~/components/racing/RankingComponent.vue'
  import * as api from '@/lib/api'
  import { Race, RankingMember } from '~/lib/model'

  @Component({
    layout: 'empty',
    components: { RankingComponent, CourseDetail, RacingBackground }
  })
  export default class RacingPage extends Vue {
    socket!: SocketIOClient.Socket

    course1: Race | null = null
    course2: Race | null = null

    ranking: Array<RankingMember> = []

    mounted() {
      if (process.server) {
        return
      }

      const API_URL: string = process.env.API_URL || '/'
      this.socket = io.connect(API_URL)
      this.socket.on('connection', () => {
        console.log('connection')
      })

      this.socket.on('race_registered', (id) => {
        console.log('race_registered:', id)
        this.loadRace(id)
      })

      this.socket.on('race_end', (id) => {
        // タイムが確定したとき
        console.log('race_end:', id)
        this.loadRace(id)

        // TODO: ランキングの更新
        this.loadRanking()
      })

      this.socket.on('race_started', ({ course, lane }) => {
        console.log('race_started:', course, lane)
        // this.loadRace()
      })

      this.socket.on('race_finished', ({ course, lane }) => {
        console.log('race_finished:', course, lane)
        // this.loadRace(id)
      })

      this.loadContent()
      this.loadRanking()
    }

    async loadContent() {
      // this.ranking = await api.getRaceList()
    }

    async loadRace(raceId: number) {
      const race = await api.getRaceDetail(raceId)
      console.log('race', race)
      if (race === null || race.course === null) {
        console.log('race is null')
        return
      }

      if (race.course === 1) {
        this.course1 = race
      } else {
        this.course2 = race
      }
    }

    async loadRanking() {
      this.ranking = await api.getRanking()
    }
  }
</script>

<style scoped lang="stylus">
  .main-wrapper {
    position: relative;
    width: 100%;

    .main-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

  .ranking-title {
    color: #FAFAFA;
  }

  .lane-1 {
    padding-right 48px;
    border-right-style: solid;
    border-right-color: #FAFAFA;
    border-right-width: 2px;
  }

  .lane-2 {
    padding-left: 48px;
    border-left-style: solid;
    border-left-color: #FAFAFA;
    border-left-width: 2px;
  }
</style>
