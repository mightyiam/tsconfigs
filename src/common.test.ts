import test from 'ava'
import macro from './test-macro'

test(macro, 'common', {
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
    inlineSources: true
  },
  include: [
    '../../src'
  ]
})
