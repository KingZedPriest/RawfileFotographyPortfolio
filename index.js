// dependencies
const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

// css to be processed
const css = fs.readFileSync("./portrait.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "./portrait.css.css"
  })
  .then((result) => {
    const output = result.css

    console.log(output)
  })