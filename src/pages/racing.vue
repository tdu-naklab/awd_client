<template>
  <v-content>
    <v-container fluid>
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
  </v-content>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    layout: 'empty',
    components: {}
  })
  export default class RacingPage extends Vue {
  }
</script>