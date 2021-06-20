import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
    { file: pkg.types, format: "es" },
  ],
  plugins: [
    external(),
    babel({
      exclude: ["node_modules/**", "playground/**"],
      babelHelpers: "bundled",
    }),
    del({ targets: ["dist/*"] }),
    svgr(),
    typescript(),
  ],
  external: ["styled-components", "prop-types"],
};
