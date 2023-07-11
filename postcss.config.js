const tailwindcss = require("tailwindcss");

const config = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer")
  ]
}

module.exports = config