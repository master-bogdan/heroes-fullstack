module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 0,
    'import/order': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'no-unused-vars': 1,
    'no-undef': 1,
  },
};
