module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"]
}
