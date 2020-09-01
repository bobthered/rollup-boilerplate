import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/js/script.js',
  output: [
    {
      file: 'public/js/script.min.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs({
      transformMixedEsModules: true,
    }),
    nodeResolve(),
    terser(),
  ],
};
