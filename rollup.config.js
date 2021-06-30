import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", exports: "named" },
    { file: pkg.module, format: "esm", exports: "named" },
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
    terser(),
  ],
  external: ["styled-components", "prop-types"],
};
