<template>
  <v-layout>
    <v-content>
      <div class="circuit-title">
        <p class="text-center" :style="circuitColorStyle">
          <span class="circuit display-2">CIRCUIT</span>
          <span class="number display-4">{{ courseNum }}</span>
        </p>
      </div>
      <div v-for="(member, index) in contents" :key="member.id">
        <span>No. {{ index + 1 }}</span>
        <span>{{ member.name }}</span>
        <span>{{ member.machine_name }}</span>
        <span>{{ member.time }}</span>
      </div>
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
  export default class CourseDetail extends Vue {
    @Prop({ default: 0 }) readonly courseNum!: number

    @Prop({ default: 'red' }) readonly courseColor!: string

    contents: Array<RankingMember> = []

    async mounted() {
      await this.loadContents()
    }

    async loadContents() {
      this.contents = await api.courseDetail(this.courseNum)
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
</style>
