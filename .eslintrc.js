module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: '16.4.0',
      pragma: 'h'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0
  }
}
