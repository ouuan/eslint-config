import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginPromise from 'eslint-plugin-promise';
import * as pluginRegexp from 'eslint-plugin-regexp';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

function withName(config, name) {
  return {
    ...config,
    name,
  };
}

export default tseslint.config(
  globalIgnores([
    '**/dist/',
    '**/public/',
    '**/static/',
  ], '@ouuan/ignores'),
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
  withName(pluginRegexp.configs['flat/recommended'], 'regexp/recommended'),
  pluginImport.flatConfigs.recommended,
  withName(pluginImport.flatConfigs.typescript, 'import/typescript'),
  pluginPromise.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  {
    name: '@ouuan/enable',
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/linebreak-style': 'error',
      '@stylistic/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
      }],
      '@stylistic/newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 3,
      }],
      '@stylistic/object-curly-newline': ['error', {
        minProperties: 4,
        consistent: true,
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: 'avoidEscape',
      }],
      '@stylistic/semi-style': 'error',
      '@stylistic/switch-colon-spacing': 'error',

      '@typescript-eslint/class-methods-use-this': ['error', {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: 'public-fields',
      }],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignorePrimitives: {
          string: true,
          boolean: true,
        },
      }],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
      }],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.{config,spec,test}.{js,ts}',
            '**/*.d.ts',
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-mutable-exports': 'error',
      'import/order': ['error', {
        alphabetize: { order: 'asc' },
        named: { enabled: true, types: 'types-last' },
      }],
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-named-default': 'error',
      'import/no-useless-path-segments': 'error',

      'promise/no-multiple-resolved': 'error',
      'promise/prefer-await-to-then': 'error',
      'promise/prefer-await-to-callbacks': 'error',
      'promise/spec-only': 'error',

      // Too many false positives, even array indexing in a constant for loop
      // https://github.com/eslint-community/eslint-plugin-security/issues/21
      'security/detect-object-injection': 'off',

      'array-callback-return': 'error',
      'camelcase': ['error', {
        properties: 'never',
        ignoreDestructuring: true,
        ignoreImports: true,
      }],
      'default-case-last': 'error',
      'eqeqeq': 'error',
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'object-shorthand': ['error', 'always', { avoidQuotes: true }],
      'one-var': ['error', { initialized: 'never' }],
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': ['error', {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      }],
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-template': 'error',
      'radix': 'error',

      'no-await-in-loop': 'warn',
      'no-bitwise': 'warn',
      'no-caller': 'error',
      'no-console': 'warn',
      'no-constructor-return': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-proto': 'error',
      'no-restricted-exports': ['error', {
        restrictedNamedExports: ['default', 'then'],
      }],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
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
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-unreachable-loop': ['error', {
        ignore: ['DoWhileStatement'],
      }],
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
    },
  },
  {
    ...tseslint.configs.disableTypeChecked,
    files: ['**/*.js'],
    name: '@ouuan/disable-type-checked-lint-for-js',
  },
  {
    name: '@ouuan/disable',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      'import/no-unresolved': 'off',
      'no-undef': 'off', // already disabled for TS, but also false positive for JS
    },
  },
);
