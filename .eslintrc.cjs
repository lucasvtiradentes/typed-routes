/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { defineConfig } = require('eslint-define-config');

/// <reference types="@eslint-types/typescript-eslint" />
module.exports = defineConfig({
  root: true,
  env: {
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },
  plugins: ['eslint-plugin-import-helpers', 'unused-imports'],
  rules: {
    // ORDER IMPORTS BY GROUP
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@\\//', ['parent', 'sibling'], 'index']
      }
    ],

    // REMOVE UNUSED IMPORTS
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
});
