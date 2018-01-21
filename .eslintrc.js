module.exports = {
    "extends": "airbnb",
    "rules": {
        "no-underscore-dangle": ["error", {
            "allow": ["_id"]
        }],
        "consistent-return": "off",
        "no-restricted-globals": "off",
        "no-console": "off",
        "no-plusplus": "off"
    },
    "globals": {
        "expect": true,
        "test": true,
        "beforeAll": true
    }
};