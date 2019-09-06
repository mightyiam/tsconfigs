import test from 'ava'
import { macro } from './unit-test-macro'
import {} from 'typescript'

const common = {
  allowSyntheticDefaultImports: true,
  esModuleInterop: true,
  forceConsistentCasingInFileNames: true,
  moduleResolution: 'Node',
  newLine: 'lf',
  noErrorTruncation: true,
  resolveJsonModule: true,
  sourceMap: true,
  strict: true,
  target: 'ESNext'
}

const endProject = {
  composite: false
}

const importableProject = {
  declaration: true
}

test(macro, 'nodejs-executable', {
  compilerOptions: {
    ...common,
    ...endProject,
    lib: ['ESNext'],
    module: 'CommonJS'
  }
})

test(macro, 'browser-executable', {
  compilerOptions: {
    ...common,
    ...endProject,
    lib: ['ESNext', 'DOM', 'WebWorker'],
    module: 'ESNext'
  }
})

test(macro, 'nodejs-module', {
  compilerOptions: {
    ...common,
    ...importableProject,
    lib: ['ESNext'],
    module: 'CommonJS'
  }
})

test(macro, 'browser-module', {
  compilerOptions: {
    ...common,
    ...importableProject,
    lib: ['ESNext', 'DOM', 'WebWorker'],
    module: 'ESNext'
  }
})

test(macro, 'agnostic-module', {
  compilerOptions: {
    ...common,
    ...importableProject,
    lib: ['ESNext'],
    module: 'CommonJS'
  }
})
