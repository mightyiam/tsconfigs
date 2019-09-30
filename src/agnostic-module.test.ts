import test from 'ava'
import { unitTest } from './unit-test-macro'
import { common, importable } from './shared'
import { integrationTest } from './integration-test-macro'

test(unitTest, 'agnostic-module', {
  compilerOptions: {
    ...common,
    ...importable,
    lib: ['ESNext'],
    module: 'CommonJS'
  }
})

test(integrationTest, {
  name: 'agnostic-module',
  additionalDependencies: [],
  srcFiles: [
    {
      filename: 'index.ts',
      contents: 'export const foo = 0'
    }
  ],
  expectedOutputFiles: [
    {
      filename: 'index.js',
      expectedContents: [
        '"use strict";',
        'Object.defineProperty(exports, "__esModule", { value: true });',
        'exports.foo = 0;',
        '//# sourceMappingURL=index.js.map'
      ].join('\n')
    },
    {
      filename: 'index.d.ts',
      expectedContents: 'export declare const foo = 0;\n'
    },
    {
      filename: 'index.js.map',
      expectedContents: JSON.stringify({
        version: 3,
        file: 'index.js',
        sourceRoot: '',
        sources: ['../src/index.ts'],
        names: [],
        mappings: ';;AAAa,QAAA,GAAG,GAAG,CAAC,CAAA'
      })
    }
  ]
})
