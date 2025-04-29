import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import * as regexpPlugin from 'eslint-plugin-regexp';

function withName(config, name) {
  return {
    ...config,
    name,
  };
}

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    name: '@ouuan/typescript-parser',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  withName(stylistic.configs.customize({
    semi: true,
    arrowParens: true,
    braceStyle: '1tbs',
  }), '@ouuan/stylistic-factory'),
  withName(regexpPlugin.configs['flat/recommended'], 'regexp/recommended'),
  importPlugin.flatConfigs.recommended,
  withName(importPlugin.flatConfigs.typescript, 'import/typescript'),
  {
    name: '@ouuan/ts-custom',
    rules: {
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
      }],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: 'avoidEscape',
      }],

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignorePrimitives: {
          string: true,
          boolean: true,
        },
      }],
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
      }],

      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.{config,spec}.{js,ts}',
            '**/*.d.ts',
          ],
          optionalDependencies: false,
        },
      ],

      'no-console': 'warn',
      'no-param-reassign': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
        {
          selector: 'CallExpression[callee.property.name=\'replace\'] > .arguments:nth-child(2):not(Literal):not(ArrowFunctionExpression):not(FunctionExpression)',
          message: 'Only literals and functions are permitted as the 2nd argument of String.prototype.replace. Use a function that returns the expression instead.',
        },
        {
          selector: 'CallExpression[callee.property.name=\'replaceAll\']',
          message: 'Use replace with /regex/g instead.',
        },
      ],
    },
  },
  {
    ...tseslint.configs.disableTypeChecked,
    files: ['**/*.js'],
    name: '@ouuan/disable-type-checked-lint-for-js',
  },
);
