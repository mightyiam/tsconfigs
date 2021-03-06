import { Macro, ExecutionContext } from 'ava'
import { ConfigName } from './shared'
import tempy from 'tempy'
import { spawnSync } from 'child_process'
import { resolve } from 'path'
import readPkgUp from 'read-pkg-up'
import { writeFileSync, mkdirSync, readFileSync, readdirSync } from 'fs'

export interface IntegrationTestInput {
  name: ConfigName
  additionalDependencies: string[]
  srcFiles: Array<{
    filename: string
    contents: string
  }>
  expectedOutputFiles: Array<{
    filename: string
    expectedContents: string
  }>
}

const srcDir = 'src'
const outDir = 'lib'

export const integrationTest: Macro<[IntegrationTestInput]> = (
  t: ExecutionContext,
  { name, additionalDependencies, srcFiles, expectedOutputFiles }
) => {
  const tmpDirPath = tempy.directory()
  const pkgJson = readPkgUp.sync()
  if (pkgJson === undefined) throw new Error()
  if (pkgJson.packageJson === undefined) throw new Error()
  if (pkgJson.packageJson.devDependencies === undefined) throw new Error()
  const typescriptVersion = pkgJson.packageJson.devDependencies.typescript
  const npmInstallCmd = spawnSync(
    'npm',
    [
      'install',
      '--loglevel', 'error',
      '--no-save',
      '--no-package-lock',
      `typescript@${typescriptVersion}`,
      ...additionalDependencies,
      resolve(__dirname, '..')
    ],
    { cwd: tmpDirPath }
  )
  if (npmInstallCmd.status !== 0) {
    t.log(npmInstallCmd.stdout.toString())
    t.log(npmInstallCmd.stderr.toString())
    t.fail()
  }
  writeFileSync(
    resolve(tmpDirPath, 'tsconfig.json'),
    JSON.stringify({
      extends: `tsconfigs/${name}`,
      compilerOptions: { outDir },
      include: [`${srcDir}/**/*`]
    })
  )
  mkdirSync(resolve(tmpDirPath, srcDir))
  srcFiles.forEach(({ filename, contents }) => {
    writeFileSync(
      resolve(tmpDirPath, srcDir, filename),
      contents
    )
  })
  const tscCmd = spawnSync('npx', ['tsc'], { cwd: tmpDirPath })
  if (tscCmd.status !== 0) {
    t.log(tscCmd.stdout.toString())
    t.log(tscCmd.stderr.toString())
    t.fail()
  }
  expectedOutputFiles.forEach(({ filename, expectedContents }) => {
    const resultJs = readFileSync(resolve(tmpDirPath, outDir, filename))
    t.is(resultJs.toString(), expectedContents)
  })
  // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
  const emittedFilenames = readdirSync(resolve(tmpDirPath, outDir))
    .sort()
  // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
  const expectedEmittedFilenames = expectedOutputFiles
    .map(({ filename }) => filename)
    .sort()
  t.deepEqual(emittedFilenames, expectedEmittedFilenames)
}

integrationTest.title = () => 'integration'
