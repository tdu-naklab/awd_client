<template>
  <v-layout>
    <v-content>
      <div class="ranking-title">
        <p class="text-center">
          <span class="display-4">- RANKING -</span>
        </p>
      </div>
      <v-layout v-for="(member, index) in contents" :key="member.id" row class="user">
        <v-flex xs3>
          <v-layout align-center justify-center row fill-height>
            <v-flex class="display-3">
              {{ index + 1 | ordinal({ includeNumber: true }) }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-layout column>
            <div class="display-2">
              {{ member.name }}
            </div>
            <div>{{ member.machine_name }}</div>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout align-center justify-center row fill-height>
            <v-flex class="display-3">
              {{ member.time }}
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
  import * as api from '@/lib/api'

  @Component({
    components: {}
  })
  export default class Ranking extends Vue {
    contents: Array<RankingMember> = []

    async mounted() {
      await this.loadContents()
    }

    async loadContents() {
      this.contents = await api.getRanking()
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
</style>
