import jsx from 'acorn-jsx';
import url from 'postcss-url';
import scss from 'rollup-plugin-scss';
import themesPackage from './package.json';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';
import path from 'path';

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

    // Bundle CSS and SASS files
    scss({
      output: './dist/themes.css',
      failOnError: true,
      includePaths: ['node_modules/'],
      importer(url /*, prev */) {
        // E.g. @import '~ckeditor5-theme-lark/theme/theme.scss';
        // See https://github.com/jtangelder/sass-loader#imports
        if (url.startsWith('~')) {
          const filePath = path.resolve(
            '..',
            '..',
            '..',
            '..',
            'node_modules',
            url.slice(1)
          );

          return {
            file: filePath,
          };
        }
      },
    }),

    postcss({
      plugins: [
        url({
          url: 'inline', // enable inline assets using base64 encoding
          maxSize: 10, // maximum file size to inline (in kilobytes)
          fallback: 'copy', // fallback method to use if max size is exceeded
        }),
      ],
    }),

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
    ...Object.keys(themesPackage.dependencies || {}),
    ...Object.keys(themesPackage.peerDependencies || {}),
  ],
};
