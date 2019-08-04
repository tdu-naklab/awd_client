<template>
  <v-toolbar clipped-left absolute app>
    <v-toolbar-title>
      <v-btn v-show="responsive" class="default v-btn--simple" icon @click="clickMenuBtn">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition"
        >
          <v-btn slot="activator" v-ripple flat icon class="toolbar-items">
            <v-icon color="tertiary">
              mdi-account
            </v-icon>
          </v-btn>
          <v-card>
            <v-list dense>
              <!--              <v-list-tile @click="logout">-->
              <!--                <v-list-tile-title>ログアウト</v-list-tile-title>-->
              <!--              </v-list-tile>-->
            </v-list>
          </v-card>
        </v-menu>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
  import { Component, Emit, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class Toolbar extends Vue {
    @Prop({ default: false }) readonly responsive!: boolean
    title = '管理ページ'

    @Emit()
    clickMenuBtn() {
    }
  }
</script>

<style scoped></style>
