import test from 'ava'
import macro from './unit-test-macro'

test(macro, 'common', {
  compilerOptions: {
    target: 'ES2015',
    module: 'CommonJS',
    declaration: true,
    importHelpers: true,
    strict: true,
    inlineSourceMap: true,
    inlineSources: true
  }
})
