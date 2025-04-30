import ouuan from '@ouuan/eslint-config-ts';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default defineConfigWithVueTs(
  ...ouuan,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  ...pluginVueA11y.configs['flat/recommended'],
  {
    name: '@ouuan/vue-override',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    name: '@ouuan/vue',
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/prefer-function-type': 'off', // for defineEmits

      // See https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/issues/54
      'vuejs-accessibility/label-has-for': ['error', { required: 'id' }],

      'vue/array-bracket-newline': ['error', 'consistent'],
      'vue/array-bracket-spacing': 'error',
      'vue/arrow-spacing': 'error',
      'vue/block-spacing': 'error',
      'vue/block-tag-newline': 'error',
      'vue/comma-dangle': ['error', 'always-multiline'],
      'vue/comma-spacing': 'error',
      'vue/comma-style': 'error',
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        { registeredComponentsOnly: false },
      ],
      'vue/dot-notation': 'error',
      'vue/eqeqeq': 'error',
      'vue/func-call-spacing': 'error',
      'vue/key-spacing': 'error',
      'vue/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
      }],
      'vue/multiline-ternary': ['error', 'always-multiline'],
      'vue/no-constant-condition': 'error',
      'vue/no-implicit-coercion': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-restricted-syntax': [
        'error',
        {
          // eslint-disable-next-line @stylistic/max-len
          selector: 'CallExpression[callee.property.name=\'replace\'] > .arguments:nth-child(2):not(Literal):not(ArrowFunctionExpression):not(FunctionExpression)',
          // eslint-disable-next-line @stylistic/max-len
          message: 'Only literals and functions are permitted as the 2nd argument of String.prototype.replace. Use a function that returns the expression instead.',
        },
        {
          selector: 'CallExpression[callee.property.name=\'replaceAll\']',
          message: 'Use replace with /regex/g instead.',
        },
      ],
      'vue/no-sparse-arrays': 'error',
      'vue/no-unused-refs': 'warn',
      'vue/no-useless-concat': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-text': 'error',
      'vue/object-curly-newline': ['error', {
        minProperties: 4,
        consistent: true,
      }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      'vue/object-shorthand': ['error', 'always', { avoidQuotes: true }],
      'vue/operator-linebreak': ['error', 'before'],
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-template': 'error',
      'vue/quote-props': ['error', 'consistent-as-needed'],
      'vue/space-in-parens': ['error', 'never'],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': 'error',
      'vue/template-curly-spacing': 'error',
      'vue/v-for-delimiter-style': ['error', 'of'],
      'vue/no-boolean-default': ['error', 'default-false'],
    },
  },
);
