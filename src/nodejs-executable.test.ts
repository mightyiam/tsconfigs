import test from 'ava'
import { unitTest } from './unit-test-macro'
import { common, executable } from './shared'
import { integrationTest } from './integration-test-macro'

test(unitTest, 'nodejs-executable',
  {
    compilerOptions: {
      ...common,
      ...executable,
      lib: ['ESNext'],
      module: 'CommonJS'
    }
  }
)

test(integrationTest, {
  name: 'nodejs-executable',
  additionalDependencies: ['@types/node'],
  srcFiles: [
    {
      filename: 'index.ts',
      contents: [
        "console.log('foo')",
        'export const foo = 0'
      ].join('\n')
    }
  ],
  expectedOutputFiles: [
    {
      filename: 'index.js',
      expectedContents: [
        '"use strict";',
        'Object.defineProperty(exports, "__esModule", { value: true });',
        'console.log(\'foo\');',
        'exports.foo = 0;',
        '//# sourceMappingURL=index.js.map'
      ].join('\n')
    },
    {
      filename: 'index.js.map',
      expectedContents: JSON.stringify({
        version: 3,
        file: 'index.js',
        sourceRoot: '',
        sources: ['../src/index.ts'],
        names: [],
        mappings: ';;AAAA,OAAO,CAAC,GAAG,CAAC,KAAK,CAAC,CAAA;AACL,QAAA,GAAG,GAAG,CAAC,CAAA'
      })
    }
  ]
})
