import test from 'ava'
import { unitTest } from './unit-test-macro'
import { common, importable } from './shared'
import { integrationTest } from './integration-test-macro'

test(unitTest, 'webworker-module', {
  compilerOptions: {
    ...common,
    ...importable,
    lib: ['ESNext', 'WebWorker'],
    module: 'ESNext'
  }
})

test(integrationTest, {
  name: 'webworker-module',
  additionalDependencies: [],
  srcFiles: [
    {
      filename: 'index.ts',
      contents: [
        'self.importScripts()',
        'export const foo = 0'
      ].join('\n')
    }
  ],
  expectedOutputFiles: [
    {
      filename: 'index.js',
      expectedContents: [
        'self.importScripts();',
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
        mappings: 'AAAA,IAAI,CAAC,aAAa,EAAE,CAAA;AACpB,MAAM,CAAC,MAAM,GAAG,GAAG,CAAC,CAAA'
      })
    }
  ]
})
