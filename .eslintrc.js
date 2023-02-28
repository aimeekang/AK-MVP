module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true
  },
  extends: 'airbnb',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'info',
          'clear'
        ]
      }
    ],
    'import/extensions': [
      'off'
    ],
    'prefer-destructuring': [
      'off'
    ],
    'react/prop-types': [
      'off'
    ]
  }
};
