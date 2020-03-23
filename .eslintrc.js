module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'arrow-spacing': 'error',
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'never',
                functions: 'ignore',
            },
        ],
        'eol-last': 'error',
        eqeqeq: 'error',
        'no-else-return': 'error',
        'no-alert': 'error',
        'no-eval': 'error',
        'no-multi-spaces': 'error',
        'no-self-assign': 'error',
        'no-bitwise': 'error',
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'prefer-const': 'error',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        semi: ['error', 'never'],
        curly: ['error', 'multi-line'],
        'arrow-body-style': ['error', 'as-needed'],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.ts', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
