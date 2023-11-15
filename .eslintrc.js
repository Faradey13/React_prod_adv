module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest": true
    },
    extends: ['plugin:react/recommended', 'airbnb-base', 'plugin:i18next/recommended', 'prettier', 'plugin:storybook/recommended'],
    ecmaFeatures: {
        "jsx": true,
        "modules": true
    },
    overrides: [{
        "env": {
            "browser": true,
            "commonjs": true,
            "node": true,
            "es2021": true,
            "jest": true
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
            sourceType: 'script'
        }
    }],
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module",
        ecmaFeatures: {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    plugins: ['react', 'i18next', "react-hooks"],
    parser: "@babel/eslint-parser",
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "i18next/no-literal-string": ['error', {
            markup0nly: true
        }],
        'no-undef': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": 'off',
        "react/display-name": "off"
    // "arrow-body-style": 0
    }
};