module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './*.config.ts',
          './**/*.spec.ts',
        ],
      },
    ],

    // TS server checks undef, ESLint only works for JS
    'no-undef': 0,

    indent: 0,
    '@typescript-eslint/indent': [
      'error',
      2,
    ],

    semi: 0,
    '@typescript-eslint/semi': 2,

    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,

    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 2,

    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,

    'no-spaced-func': 0,
    'func-call-spacing': 0,
    '@typescript-eslint/func-call-spacing': 2,

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,

    '@typescript-eslint/explicit-module-boundary-types': 0,

    '@typescript-eslint/no-explicit-any': 0,

    '@typescript-eslint/type-annotation-spacing': 2,

    'no-inner-declarations': 0,

    'max-statements-per-line': ['error', { max: 1 }],

    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      {
        selector: "CallExpression[callee.property.name='replace'] > .arguments:nth-child(2):not(Literal):not(ArrowFunctionExpression):not(FunctionExpression)",
        message: 'Only literals and functions are permitted as the 2nd argument of String.prototype.replace. Use a function that returns the expression instead.',
      },
    ],

    'no-constant-condition': ['error', { checkLoops: false }],

    'no-continue': 0,
  },
};
