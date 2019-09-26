module.exports = {
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {},
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
