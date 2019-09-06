import { Assertions, Macro } from 'ava'
import { resolve, dirname } from 'path'
import { readFileSync } from 'fs'
import { libMap, CompilerOptions, ModuleKind, ModuleResolutionKind, NewLineKind, ScriptTarget, readConfigFile, parseJsonConfigFileContent, sys } from 'typescript'
declare module 'typescript' {
  export const libMap: Map<string>
}

type ConfigName =
  'browser-importable-project' |
  'nodejs-importable-project' |
  'agnostic-importable-project' |
  'browser-end-project' |
  'nodejs-end-project'

type OptionValue = CompilerOptions[string]
type OptionParser = (value: any) => CompilerOptions[string]

const optionParsers: { [key: string ]: OptionParser } = {
  lib: (libs: string[]): string[] => libs.map((lib): string => libMap.get(lib.toLowerCase()) as string),
  module: (kind: ModuleKind): string => ModuleKind[kind],
  moduleResolution: (kind: string): string => {
    const map: any = {
      node: ModuleResolutionKind.NodeJs,
      classic: ModuleResolutionKind.Classic
    }
    return map[kind.toLowerCase()]
  },
  newLine: (kind: string): string => {
    const map: any = {
      lf: NewLineKind.LineFeed,
      crlf: NewLineKind.CarriageReturnLineFeed
    }
    return map[kind.toLowerCase()]
  },
  target: (kind: ScriptTarget): string => ScriptTarget[kind]
}

const rawToCompilerOptions = (raw: any): CompilerOptions => ({
  configFilePath: undefined,
  ...Object.fromEntries(
    Object.entries(raw)
      .map(([key, value]: [string, any]): [string, OptionValue] => {
        const parser = optionParsers[key]
        if (!parser) return [key, value]
        return [key, parser(value)]
      })
  )
})

export const macro: Macro<[ConfigName, any]> = (
  t: Assertions,
  configName: ConfigName,
  { compilerOptions: rawExpectedOptions }: any
): void => {
  const expectedOptions = rawToCompilerOptions(rawExpectedOptions)

  const path = resolve(__dirname, '..', `${configName}.json`)
  const { config } = readConfigFile(
    path,
    (path: string): string => readFileSync(path, { encoding: 'utf-8' })
  )
  const actual = parseJsonConfigFileContent(config, sys, dirname(path))

  t.deepEqual(actual.options, expectedOptions)
}

macro.title = (_, name: ConfigName): ConfigName => name
