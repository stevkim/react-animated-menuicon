const postcss = require("rollup-plugin-postcss");
const typescript = require("rollup-plugin-typescript2");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
    postcss(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
  external: ["react", "react-dom"],
};
