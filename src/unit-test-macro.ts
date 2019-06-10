import { Assertions, Macro } from 'ava'
import { resolve, dirname } from 'path'
import { readFileSync } from 'fs'
import * as ts from 'typescript'

type ConfigName = 'common' | 'browser' | 'node' | 'universal'

const rawToCompilerOptions = (raw: any): ts.CompilerOptions => {
  const options = Object.assign({}, raw)
  options.target = ts.ScriptTarget[options.target]
  options.module = ts.ModuleKind[options.module]
  options.configFilePath = undefined
  if (options.lib) {
    options.lib = options.lib.map((lib: string): string => `lib.${lib}.d.ts`)
  }
  return options as ts.CompilerOptions
}

const macro: Macro<[ConfigName, any]> = (
  t: Assertions,
  configName: ConfigName,
  { compilerOptions: rawExpectedOptions }: any
): void => {
  const expectedOptions = rawToCompilerOptions(rawExpectedOptions)

  const path = resolve(__dirname, '..', `${configName}.json`)
  const { config } = ts.readConfigFile(
    path,
    (path: string): string => readFileSync(path, { encoding: 'utf-8' })
  )
  const actual = ts.parseJsonConfigFileContent(config, ts.sys, dirname(path))

  t.deepEqual(actual.options, expectedOptions)
}

macro.title = (_, name: ConfigName): ConfigName => name

export default macro
