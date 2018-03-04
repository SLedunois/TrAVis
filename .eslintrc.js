module.exports = {
    "extends": "airbnb",
    "rules": {
        "no-underscore-dangle": ["error", {
            "allow": ["_id"]
        }],
        "consistent-return": "off",
        "no-restricted-globals": "off",
        "no-console": "off",
        "no-plusplus": "off",
        "react/prefer-stateless-function": [0],
        "max-len": [2,
            {
                "ignorePattern": "<(svg|rect|g|path|ellipse)[^>|^\\>]",
            },
        ],
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to"],
            "aspects": ["preferButton"]
        }]
    },
    "globals": {
        "expect": true,
        "test": true,
        "beforeAll": true,
        "React": true,
        "document": true,
        "describe": true,
        "it": true
    }
};