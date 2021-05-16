module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    tsconfigRootDir: './',
    sourceType: 'module',
  },

  rules: {
    'no-warning-comments': 2,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-case-declarations': 'warn',
    'no-constant-condition': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-ex-assign': 'warn',
    'no-fallthrough': 'warn',
    'no-useless-escape': 'warn',
    'max-depth': ['error', 4],
    camelcase: 'off',
    quotes: ['off', 'single'],
    semi: 0,
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'ignore',
      'exports': 'ignore',
      'functions': 'ignore'
    }]
  },
};
