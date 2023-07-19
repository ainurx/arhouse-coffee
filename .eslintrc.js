module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }

  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }]
  }
}
