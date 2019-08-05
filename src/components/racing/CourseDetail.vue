<template>
  <v-layout>
    <v-content>
      <div class="circuit-title">
        <p class="text-center" :style="circuitColorStyle">
          <span class="circuit display-2 sub-title">CIRCUIT</span>
          <span class="number display-4 sub-title">{{ courseNum }}</span>
        </p>
      </div>
      <div v-for="(member, index) in userList" :key="member.id">
        <v-layout align-end justify-center row fill-height>
          <v-flex xs2 class="grey-text no-text">
            No.{{ index + 1 }}
          </v-flex>
          <v-flex xs8 column>
            <div class="grey-text display-2">
              {{ member.name }}
            </div>
            <div class="machine-name">
              {{ member.machine_name }}
            </div>
          </v-flex>
        </v-layout>
        <div class="grey-text time-score display-3">
          {{ member.raptime | formatMillsec }}
        </div>
      </div>
    </v-content>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Race, RaceMember } from '~/lib/model'

  @Component({
    components: {},

    filters: {
      formatMillsec(value: number | null) {
        if (value === null) {
          return '--.---'
        }
        const sec = ('00' + Math.floor(value / 1000)).slice(-2)
        const millisec = ('000' + Math.floor(value - (Math.floor(value / 1000) * 1000))).slice(-3)
        return `${sec}.${millisec}`
      }
    }
  })
  export default class CourseDetail extends Vue {
    @Prop({ default: 0 }) readonly courseNum!: number

    @Prop({ default: 'red' }) readonly courseColor!: string

    @Prop({ default: null }) readonly raceData: Race | null = null

    timer: number = -1

    mounted() {
      const timer: any = setInterval(() => {
        if (this.raceData !== null && this.raceData.users !== null) {
          this.raceData.users.forEach((value: RaceMember) => {
            if (value.raceStartTime) {
              value.raptime = (new Date()).getTime() - value.raceStartTime
            }
          })
        }
      }, 50)
      this.timer = timer
    }

    destroyed() {
      clearInterval(this.timer)
    }

    get userList() {
      if (this.raceData === null || this.raceData.users === null) {
        return []
      }

      return this.raceData.users
    }

    public get circuitColorStyle() {
      return { 'border-bottom-color': this.courseColor }
    }
  }
</script>

<style scoped lang="stylus">
  .text-center {
    text-align: center;

    border-bottom-style: solid;
    border-bottom-width: 3px;
  }

  .user-content {
    padding-bottom: 32px;
  }

  .grey-text {
    color: #EEEEEE;
  }

  .machine-name {
    color: #BDBDBD;
  }

  .sub-title {
    color: #FAFAFA;
  }

  .no-text {
    font-size 32px;
    padding-right: 32px;
  }

  .time-score {
    padding-top: 16px;
    text-align: center;
  }
</style>
