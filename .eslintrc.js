let config = {
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/recommended',
    ],
    'rules': {
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'eol-last': 2,
        'indent': 2,
        'jsx-quotes': [2, 'prefer-double'],
        'no-trailing-spaces': 2,
        'operator-linebreak': [2, 'before'],
        'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    },
    'settings': {},
    'overrides': [
        {
            'files': ['test/**', 'src/**.test.*'],
            'rules': {
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
        extends: [
            'plugin:@typescript-eslint/recommended',
        ],
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
