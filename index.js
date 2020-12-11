let config = {
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/recommended"
    ],
    "rules": {
        "comma-dangle": [2, "always-multiline"],
        "comma-spacing": 2,
        "eol-last": 2,
        "jsx-quotes": [2, "prefer-double"],
        "no-trailing-spaces": 2,
        "operator-linebreak": [2, "before"],
        "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    },
};

if (process.env.NODE_ENV === 'development') {
    config.rules = {...config.rules,
        "indent": 1,
        "no-unused-vars": 1,
        "no-unreachable": 1,
    }
}

module.exports = config