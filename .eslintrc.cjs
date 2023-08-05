module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'simple-import-sort',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variableLike',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            format: ['UPPER_CASE', 'PascalCase', 'camelCase'],
            modifiers: ['const', 'global'],
          },
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
          {
            selector: 'enum',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'should',
              'has',
              'can',
              'did',
              'will',
              'show',
              'only',
            ],
          },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'import/extensions': [
          'error',
          'always',
          {
            ignorePackages: true,
            pattern: {
              tsx: 'never',
              ts: 'never',
            },
          },
        ],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        'react/require-default-props': [0],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^next'],
          ['^react'],
          ['^\\u0000'],
          ['^\\w'],
          ['^@?\\w'],
          ['^'],
          ['^\\.'],
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
