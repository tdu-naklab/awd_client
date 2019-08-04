<template>
  <v-app id="inspire" dark>
    <toolbar :responsive="responsive" @click-menu-btn="toggleDrawer" />
    <drawer :responsive="responsive" :is-open="isOpenDrawer" @update:isOpen="updateDrawer" />
    <nuxt />
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Toolbar: () => import('~/components/core/Toolbar.vue'),
      Drawer: () => import('~/components/core/Drawer.vue')
    }
  })
  export default class DefaultView extends Vue {
    responsive = false
    isOpenDrawer = false

    mounted() {
      this.onResponsiveInverted()
      if (process.client) {
        window.addEventListener('resize', this.onResponsiveInverted)
      }
    }

    beforeDestroy() {
      if (process.client) {
        window.removeEventListener('resize', this.onResponsiveInverted)
      }
    }

    onResponsiveInverted() {
      if (process.client && window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }

    toggleDrawer() {
      console.log('toggleDrawer')
      this.isOpenDrawer = !this.isOpenDrawer
    }

    updateDrawer(value: boolean) {
      this.isOpenDrawer = value
    }
  }
</script>
