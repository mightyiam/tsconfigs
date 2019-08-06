# tsconfigs

[![Greenkeeper badge](https://badges.greenkeeper.io/mightyiam/tsconfigs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mightyiam/tsconfigs.svg?branch=master)](https://travis-ci.org/mightyiam/tsconfigs)
[![Badge: npm version badge for package `tsconfigs`](https://img.shields.io/npm/v/tsconfigs.svg)](https://www.npmjs.com/package/tsconfigs)

> Reusable TypeScript configuration files to extend from.

Strictly following semantic versioning. So no worries.

## Usage

In your `tsconfig.json`:

```js
{
  // For the `universal` flavor
  "extends": "tsconfigs/universal",

   // If you're using an old version of TypeScript and the previous line does not work, take a look at [TypeScript issue #18865](https://github.com/Microsoft/TypeScript/issues/18865) for a workaround.

  "compilerOptions": {
    // Override whatever you like
    "declaration": false
  }
}
```

## General principles

### Experimental features

Write something here on the policy.

### Project kind overview

#### Browser end-project

#### Node.js end-project

#### Agnostic importable project

#### Browser importable project

#### Node.js importable project

## Options common to all project kinds

### `allowJs`

- TypeScript default is `false`
- Our default is `false`

In an ideal TypeScript project there is no JavaScript, because TypeScript seems superior.

### `allowSyntheticDefaultImports`

- TypeScript default is ***
- Our default is `false`

https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file

### `allowUnreachableCode`

- TypeScript default is `true`
- Our default is `false`

Unreachable code seems like an error.

### `allowUnusedLabels`

- TypeScript default is `false`
- Our default is `false`

Unused labels seem like errors.

### `alwaysStrict`

- TypeScript default is `false`
- Our default is `false`

See `strict`.

### `baseUrl`

- TypeScript default is `""`
- Our default is `""`

Cannot be reliably set due to https://github.com/microsoft/TypeScript/issues/29172.

### `build`

- TypeScript default is `false`
- Our default is `false`

Too project-specific.

### `charset`

- TypeScript default is `"utf8"`
- Our default is `"utf8"`

### `checkJs`

- TypeScript default is `false`
- Our default is `false`

In an ideal TypeScript project there is no JavaScript, because TypeScript seems superior.

### `declarationDir`

- TypeScript default is `""`
- Our default is `""`

Irrelevant, because `declaration: false`.

CB: *** or too project specific?

### `declarationMap`

- TypeScript default is `false`
- Our default is `false`

It seems like this is for debugging the TypeScript project itself, and not for the common user.

### `diagnostics`

- TypeScript default is `false`
- Our default is `false`

### `disableSizeLimit`

- TypeScript default is `false`
- Our default is `false`

Seems like a sane protection against something unreasonable occurring with the loading of source files.

### `downlevelIteration`

- TypeScript default is `false`
- Our default is `false`

See `target`.

### `emitBOM`

- TypeScript default is `false`
- Our default is `false`

Seems like a rare and obscure use case. We put a few minutes into researching this and came up with very little.

### `emitDeclarationOnly`

- TypeScript default is `false`
- Our default is `false`

### `emitDecoratorMetadata`

- TypeScript default is `false`
- Our default is `false`

See `experimentalDecorators`.

### `esModuleInterop`

https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file

- TypeScript default is `false`
- Our default is `true`

Because `import { bar } from 'foo'` seems nicer than `import * as foo from 'foo'; const bar = foo.bar`

### `experimentalDecorators`

- TypeScript default is `false`
- Our default is `false`

See (policy)[#experimental-features] on experimental features.

### `extendedDiagnostics`


- TypeScript default is `false`
- Our default is `false`

### `forceConsistentCasingInFileNames`


- TypeScript default is `false`
- Our default is `false`

### `importHelpers`


- TypeScript default is `false`
- Our default is `false`

### `incremental`


- TypeScript default is `false`
- Our default is `false`

### `inlineSourceMap`


- TypeScript default is `false`
- Our default is `false`

### `inlineSources`


- TypeScript default is `false`
- Our default is `false`

### `isolatedModules`


- TypeScript default is `false`
- Our default is `false`

### `jsx`


- TypeScript default is `false`
- Our default is `false`

### `jsxFactory`


- TypeScript default is `false`
- Our default is `false`

### `keyofStringsOnly`


- TypeScript default is `false`
- Our default is `false`

### `listEmittedFiles`


- TypeScript default is `false`
- Our default is `false`

### `listFiles`


- TypeScript default is `false`
- Our default is `false`

### `locale`


- TypeScript default is `false`
- Our default is `false`

### `mapRoot`


- TypeScript default is `false`
- Our default is `false`

### `maxNodeModuleJsDepth`


- TypeScript default is `false`
- Our default is `false`

### `moduleResolution`


- TypeScript default is `false`
- Our default is `false`

### `newLine`


- TypeScript default is `false`
- Our default is `false`

### `noEmit`


- TypeScript default is `false`
- Our default is `false`

### `noEmitHelpers`


- TypeScript default is `false`
- Our default is `false`

### `noEmitOnError`


- TypeScript default is `false`
- Our default is `false`

### `noErrorTruncation`


- TypeScript default is `false`
- Our default is `false`

### `noFallthroughCasesInSwitch`


- TypeScript default is `false`
- Our default is `false`

### `noImplicitAny`


- TypeScript default is `false`
- Our default is `false`

### `noImplicitReturns`


- TypeScript default is `false`
- Our default is `false`

### `noImplicitThis`


- TypeScript default is `false`
- Our default is `false`

### `noImplicitUseStrict`


- TypeScript default is `false`
- Our default is `false`

### `noLib`


- TypeScript default is `false`
- Our default is `false`

### `noResolve`


- TypeScript default is `false`
- Our default is `false`

### `noStrictGenericChecks`


- TypeScript default is `false`
- Our default is `false`

### `noUnusedLocals`


- TypeScript default is `false`
- Our default is `false`

### `noUnusedParameters`


- TypeScript default is `false`
- Our default is `false`

### `outDir`


- TypeScript default is `false`
- Our default is `false`

### `outFile`


- TypeScript default is `false`
- Our default is `false`

### `paths`


- TypeScript default is `false`
- Our default is `false`

### `preserveConstEnums`


- TypeScript default is `false`
- Our default is `false`

### `preserveSymlinks`


- TypeScript default is `false`
- Our default is `false`

### `preserveWatchOutput`


- TypeScript default is `false`
- Our default is `false`

### `pretty`


- TypeScript default is `false`
- Our default is `false`

### `project`


- TypeScript default is `false`
- Our default is `false`

### `removeComments`


- TypeScript default is `false`
- Our default is `false`

### `resolveJsonModule`


- TypeScript default is `false`
- Our default is `false`

### `rootDir`


- TypeScript default is `false`
- Our default is `false`

### `rootDirs`


- TypeScript default is `false`
- Our default is `false`

### `skipLibCheck`


- TypeScript default is `false`
- Our default is `false`

### `sourceMap`


- TypeScript default is `false`
- Our default is `false`

### `sourceRoot`


- TypeScript default is `false`
- Our default is `false`

### `strict`


- TypeScript default is `false`
- Our default is `false`

### `strictBindCallApply`


- TypeScript default is `false`
- Our default is `false`

### `strictFunctionTypes`


- TypeScript default is `false`
- Our default is `false`

### `strictPropertyInitialization`


- TypeScript default is `false`
- Our default is `false`

### `strictNullChecks`


- TypeScript default is `false`
- Our default is `false`

### `suppressExcessPropertyErrors`


- TypeScript default is `false`
- Our default is `false`

### `suppressImplicitAnyIndexErrors`


- TypeScript default is `false`
- Our default is `false`

### `target`


- TypeScript default is `false`
- Our default is `false`

### `traceResolution`


- TypeScript default is `false`
- Our default is `false`

### `tsBuildInfoFile`


- TypeScript default is `false`
- Our default is `false`

### `types`


- TypeScript default is `false`
- Our default is `false`

### `typeRoots`

## End-project options

### `composite`

- TypeScript default is `true`
- Our default is `false`

Because it seems to have no benefit for end-projects and it necessitates generation of declaration files, which seem useless in end-projects.

### `declaration`

- TypeScript default is `false`
- Our default is `false`

Because it seems to have no benefit for end-projects.

## Importable project options

### `composite`

- TypeScript default is `true`
- Our default is `true`

Because "Referenced projects must have the new composite setting enabled". Importable projects might be referenced projects. And there doesn't seem to be a down-side to this.

### `declaration`

- TypeScript default is `false`
- Our default is `true`

Because we'd like to provide the importer with type definitions.

## Browser options

### `lib`

- TypeScript default depends on `target`
- Our default is `["ESNext","DOM","WebWorker"]`


### `module`

- TypeScript default depends on `target`
- Our default is `"ESNext"`

## Node.js options

### `lib`

- TypeScript default depends on `target`
- Our default is `"ESNext"`

You'd most likely also like to install the [`@types/node` package](https://www.npmjs.com/package/@types/node).

### `module`

- TypeScript default depends on `target`
- Our default is `"CommonJS"`

## Environment-agnostic project options

### `lib`

- TypeScript default depends on `target`
- Our default is `"ESNext"`

### `module`

- TypeScript default depends on `target`
- Our default is `"CommonJS"`

While for small packages, CommonJS could be just fine, for larger packages, where the ability to perform tree shaking is desirable, it seems that the agnostic project author should consider providing two builds. One CommonJS build and one ES modules build.  TODO: read this: https://jasonformat.com/enabling-modern-js-on-npm/
