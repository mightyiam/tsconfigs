export type ConfigName =
  'nodejs-executable' |
  'nodejs-module' |
  'browser-executable' |
  'browser-module' |
  'webworker-module' |
  'agnostic-module'

export const common = {
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

export const executable = { composite: false }

export const importable = { declaration: true }
