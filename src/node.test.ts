import test from 'ava'
import macro from './test-macro'

test(macro, 'node', {
  compilerOptions: {
    target: 'ES2015',
    module: 'CommonJS',
    declaration: true,
    outDir: '../../lib',
    rootDir: '../../src',
    importHelpers: true,
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    inlineSourceMap: true,
    inlineSources: true,

    // specific
    lib: ['es2017'],
    types: ['node']
  },
  include: [
    '../../src'
  ]
})
