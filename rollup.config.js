const {readdirSync} = require("fs"), {join} = require("path")
const typescript = require("@rollup/plugin-typescript")

let mode = join(__dirname, "mode")

// Process JavasScript files
module.exports = readdirSync(mode).filter(f => /\.js$/.test(f)).map(f => ({
  input: join(mode, f),
  output: {
    file: join(mode, f.replace(/\.js$/, ".cjs")),
    format: "cjs"
  },
  external: id => !/^(\.?\/|\w:)/.test(id)
// Process TypeScript files
})).concat(readdirSync(mode).filter(f => /[^d]\.ts/.test(f)).map(f => ({
  input: join(mode, f),
  output: {
    file: join(mode, f.replace(/\.ts$/, ".cjs")),
    format: "cjs"
  },
  external: id => !/^(\.?\/|\w:)/.test(id),
  plugins: [typescript()]
})))
