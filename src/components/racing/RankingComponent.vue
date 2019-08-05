<template>
  <v-layout>
    <v-content>
      <div class="ranking-title">
        <p class="text-center">
          <span class="display-4 ranking-title">- RANKING -</span>
        </p>
      </div>
      <v-layout v-for="(member, index) in getContents" :key="member.id" row class="user">
        <v-flex xs2>
          <v-layout align-center justify-center row fill-height>
            <v-flex class="display-3 grey-text">
              {{ index + 1 | ordinal({ includeNumber: true }) }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs8>
          <v-layout column>
            <div class="display-2 grey-text">
              {{ member.name }}
            </div>
            <div class="machine-name">
              {{ member.machine_name }}
            </div>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout align-center justify-center row fill-height class="grey-text">
            <v-flex class="display-3">
              {{ member.raptime | formatMillsec }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { RankingMember } from '~/lib/model'

  @Component({
    components: {},

    filters: {
      formatMillsec(value: number) {
        if (value === null) {
          return '--.---'
        }
        const sec = ('00' + Math.floor(value / 1000)).slice(-2)
        const millisec = ('000' + Math.floor(value - (Math.floor(value / 1000) * 1000))).slice(-3)
        return `${sec}.${millisec}`
      }
    }
  })
  export default class RankingComponent extends Vue {
    @Prop({ default: null }) readonly contents!: Array<RankingMember>

    get getContents() {
      if (this.contents === null) {
        return []
      } else {
        return this.contents
      }
    }
  }
</script>

<style scoped lang="stylus">
  .text-center {
    text-align: center;
  }

  .user {
    padding-top 16px;
  }

  .grey-text {
    color: #EEEEEE;
  }

  .machine-name {
    color: #BDBDBD;
  }

  .ranking-title {
    color: #FAFAFA;
  }
</style>
