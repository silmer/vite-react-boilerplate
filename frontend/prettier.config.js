// https://prettier.io/docs/en/configuration.html

module.exports = {
    printWidth: 120,
    singleQuote: false,
    trailingComma: "all",
    tabWidth: 4,
    overrides: [
        {
            //IE
            files: ["*.html", "*.htm"],
            options: {
                trailingComma: "es5"
            }
        }
    ]
}