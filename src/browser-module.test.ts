import test from 'ava'
import { unitTest } from './unit-test-macro'
import { common, importable } from './shared'
import { integrationTest } from './integration-test-macro'

test(unitTest, 'browser-module', {
  compilerOptions: {
    ...common,
    ...importable,
    lib: ['ESNext', 'DOM'],
    module: 'ESNext',
    types: []
  }
})

test(integrationTest, {
  name: 'browser-module',
  additionalDependencies: [],
  srcFiles: [
    {
      filename: 'index.ts',
      contents: [
        'document.querySelector("div")',
        'export const foo = 0'
      ].join('\n')
    }
  ],
  expectedOutputFiles: [
    {
      filename: 'index.js',
      expectedContents: [
        'document.querySelector("div");',
        'export const foo = 0;',
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
        mappings: 'AAAA,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAA;AAC7B,MAAM,CAAC,MAAM,GAAG,GAAG,CAAC,CAAA'
      })
    }
  ]
})
