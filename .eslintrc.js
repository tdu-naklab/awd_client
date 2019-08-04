module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-unused-vars': 1,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'vue/script-indent': [
      'error', 2, { 'baseIndent': 1 }
    ]
  },

  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
