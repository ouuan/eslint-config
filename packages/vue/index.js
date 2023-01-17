module.exports = {
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@ouuan/eslint-config-ts',
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'vue/block-lang': ['error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],

    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
    }],

    'vue/multi-word-component-names': 0,

    'vue/no-export-in-script-setup': 2,

    'vue/no-reserved-component-names': ['error', {
      disallowVue3BuiltInComponents: true,
    }],

    'vue/no-template-target-blank': 2,

    'vue/no-unused-refs': 2,

    'vue/no-useless-mustaches': 2,

    'vue/no-useless-v-bind': 2,

    'vue/no-v-text': 2,

    'vue/padding-line-between-blocks': 2,

    'vue/v-for-delimiter-style': ['error', 'of'],

    'vue/valid-define-emits': 2,

    'vue/valid-define-props': 2,

    'vue/valid-next-tick': 2,
  },
};
