// eslint.config.mjs
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node, // ✅ fixes process, __dirname, etc.
        ...globals.es2021,
      },
    },

    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
