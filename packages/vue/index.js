import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import ouuan from '@ouuan/eslint-config-ts';

export default defineConfigWithVueTs(
  ...ouuan,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.strictTypeChecked,
  {
    name: '@ouuan/ts-custom-override',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    name: '@ouuan/vue-custom',
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/prefer-function-type': 'off', // for defineEmits
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        { registeredComponentsOnly: false },
      ],
      'vue/no-unused-refs': 'warn',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-text': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/v-for-delimiter-style': ['error', 'of'],
      'vue/no-boolean-default': ['error', 'default-false'],
    },
  },
);
