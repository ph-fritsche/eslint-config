let config = {
    ignorePatterns: [
        '/build/',
        '/dist/',
        '/node_modules/',
        '/var/',
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/dom',
    ],
    rules: {
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'eol-last': 2,
        'indent': 2,
        'jsx-quotes': [2, 'prefer-double'],
        'no-trailing-spaces': 2,
        'operator-linebreak': [2, 'before'],
        'quotes': [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'semi': [2, 'never', { beforeStatementContinuationChars: 'always' }],
    },
    settings: {},
    overrides: [
        {
            files: ['**.jsx', '**.{cjs,mjs}'],
        },
        {
            files: ['test/**', '**.test.*', '**.stories.*'],
            rules: {
                'react/prop-types': 0,
            },
        },
    ],
}

function moduleExists(moduleName) {
    try {
        require.resolve(moduleName)
        return true
    } catch(e) {
        return false
    }
}

if (moduleExists('typescript')) {
    config.overrides.push({
        files: ['**.{ts,tsx}'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: './tsconfig.json',
        },
        extends: [
            'plugin:@typescript-eslint/recommended',
        ],
        rules: {
            // The following rules are documented as `recommended`, but are not part of the config.
            // See https://github.com/typescript-eslint/typescript-eslint/issues/4224
            '@typescript-eslint/await-thenable': 1,
            '@typescript-eslint/no-floating-promises': [2,  {ignoreVoid: true}],
            '@typescript-eslint/no-for-in-array': 2,
            '@typescript-eslint/no-unnecessary-type-assertion': 1,
            '@typescript-eslint/no-unsafe-argument': 1,
            '@typescript-eslint/no-unsafe-assignment': 1,
            '@typescript-eslint/no-unsafe-call': 1,
            '@typescript-eslint/no-unsafe-member-access': 1,
            '@typescript-eslint/no-unsafe-return': 1,
            '@typescript-eslint/restrict-plus-operands': 2,
            '@typescript-eslint/restrict-template-expressions': [2, { allowNumber: true}],
        },
    })
}

if (moduleExists('jest')) {
    config.extends.push(
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
    )
}

if (moduleExists('react')) {
    config.extends.push(
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/react',
    )
    config.settings.react = {
        version: 'detect',
    }
}

if (process.env.NODE_ENV === 'development') {
    config.rules = {...config.rules,
        'indent': 1,
        'no-unused-vars': 1,
        'no-unreachable': 1,
    }
}

module.exports = config
