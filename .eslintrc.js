module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'no-empty-function': 2,
    'semi': [2, 'never'],
    'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
    'max-len': [2, { 'tabWidth': 2 }],
    'indent': [2, 2],
    'newline-per-chained-call': 2,
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'operator-linebreak': [2, 'before'],
    'comma-style': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'block-spacing': 2,
    'object-curly-spacing': [2, 'always'],
  },
}
