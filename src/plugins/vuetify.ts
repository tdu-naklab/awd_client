import Vue from 'vue'
import Vuetify from 'vuetify'

import ja from 'vuetify/es5/locale/ja'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'mdi',
  theme: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  lang: {
    locales: { ja },
    current: 'ja'
  }
})
