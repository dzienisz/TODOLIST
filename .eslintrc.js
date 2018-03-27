module.exports = {
    "extends": "airbnb",
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error"
    },
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
};