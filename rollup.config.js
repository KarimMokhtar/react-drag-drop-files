import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: pkg.source,
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', exports: 'named' },
    { file: 'dist/index.es.js', format: 'esm', exports: 'named' }
  ],
  plugins: [
    del({ targets: ['dist/*'] }),
    external(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      outDir: './dist',
      rootDir: './src'
    }),
    babel({
      exclude: ['node_modules/**', 'playground/**'],
      babelHelpers: 'bundled'
    }),
    svgr(),
    terser()
  ],
  external: ['styled-components', 'prop-types']
};
