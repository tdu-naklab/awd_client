<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="syncedIsOpen"
    app
    :permanent="!responsive"
    clipped
    floating
    absolute
    overflow
    mobile-break-point="991"
    width="260"
  >
    <v-layout class="fill-height" tag="v-list" column>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        avatar
        class="v-list-item"
      >
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title v-text="link.text" />
      </v-list-tile>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'

  @Component
  export default class Drawer extends Vue {
    @Prop({ default: false }) readonly responsive!: boolean
    @PropSync('isOpen', { type: Boolean }) syncedIsOpen!: boolean

    links = [
      {
        to: '/user',
        icon: 'mdi-account',
        text: 'User'
      },
      {
        to: '/racing',
        icon: 'mdi-car',
        text: 'レース画面'
      },
      {
        to: '/article/movie',
        icon: 'mdi-movie',
        text: 'Movie'
      },
      {
        to: '/onair',
        icon: 'mdi-video',
        text: 'ONAIR'
      },
      {
        to: '/book',
        icon: 'mdi-book-open',
        text: 'Book'
      }
    ]
  }
</script>

<style scoped></style>
