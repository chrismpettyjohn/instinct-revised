import jsx from 'acorn-jsx';
import scss from 'rollup-plugin-scss';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import {terser} from 'rollup-plugin-terser';
import frontendPackage from './package.json';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  preserveModules: false,
  input: './src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    // Prevents peer dependencies from being bundled
    blockPeerDependencies(),

    // Resolves node_module dependencies and bundles them
    resolveDependencies({
      browser: true,
      preferBuiltins: false,
      dedupe: ['react', 'react-dom'],
    }),

    // Convert JSON into ES Modules
    json({
      compact: true,
    }),

    // Bundle CSS and SASS files
    scss({
      output: './dist/frontend.css',
      failOnError: true,
    }),

    // Bundle image files
    image(),

    // Typescript compilation
    typescript({
      rootDir: './src',
      tsconfig: './tsconfig.build.json',
    }),

    // Bundle into CommonJS format
    commonJS({
      sourceMap: false,
    }),

    // Minimize final bundle
    terser({
      compress: true,
      output: {
        comments: false,
      },
      mangle: true,
      keep_classnames: false,
      keep_fnames: false,
    }),
  ],
  external: [
    ...Object.keys(frontendPackage.dependencies || {}),
    ...Object.keys(frontendPackage.peerDependencies || {}),
  ],
};
