# tsconfigs

[![Greenkeeper badge](https://badges.greenkeeper.io/mightyiam/tsconfigs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mightyiam/tsconfigs.svg?branch=master)](https://travis-ci.org/mightyiam/tsconfigs)
[![Badge: npm version badge for package `tsconfigs`](https://img.shields.io/npm/v/tsconfigs.svg)](https://www.npmjs.com/package/tsconfigs)

## Overview

This is a set of reusable TypeScript configuration files to extend from.

## Project kind overview

The available *project kind*s are a matrix of two criteria:

1. Whether the project is `importable` or an `end-project`.
1. The runtime environment of the project; `browser`, `nodejs` or `agnostic`.

This results in the following kinds of projects:

- `browser-importable-project`
- `nodejs-importable-project`
- `agnostic-importable-project`
- `browser-end-project`
- `nodejs-end-project`
- ~~`agnostic-end-project`~~ because an end-project needs a runtime, doesn't it?

## Example

In your `tsconfig.json`:

```jsonc
{
  "extends": "tsconfigs/browser-end-project",
  "compilerOptions": {
    // Override whatever you like
  },
  "include": [
    "src/**/*"
  ]
}
```

## Terms

- *Project kind / kind of project*: One of the configurations that this project exports.
- *Default value*: TypeScript's default value of an option.
- *Our value*: tsconfig's value of an option in a particular *kind of project*.

## When *our value* equals *default value*

Writing this project, we have made a decision regarding each and every documented TypeScript configuration option.

Regarding options where *our value* is the same as the *default value*, then this project **does not specify it**.

This is an important point, because, if a future TypeScript release changes the default value for an option that tsconfigs does not specify, upgrading to that version of TypeScript in your project would apply that new value.

## Experimental features

Experimental features are outside of the scope of this project. So no experimental feature option is turned on.

## Strictness

We presume that strict type checking is generally desirable.

New type checking features in future releases of TypeScript are, per policy, turned off by default, for backward compatibility. Effectively making new type features, *opt-in*.

The `strict` option, however, turns on a set of strict type checking options. New strict options from future TypeScript releases will be included in it, effectively making new type checking features *opt-out*.

tsconfigs maintains the *opt-out* behavior: we turn `strict` on and yet keep the individual type check options that it includes, off.

## Paths

We would love to include some [path options like `include` and `outDir`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#details), but, we feel that it would not be reliable, because TypeScript resolves relative paths from the configuration file in which they appear and not from the end-configuration file. See [this issue](https://github.com/mightyiam/tsconfigs/issues/83).

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

See [`Strictness`](#strictness).

### `baseUrl`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

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

See [`target`](#target).

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
- Our default is `true`

While this does not force case sensitivity in file name references, it at least ensures consistent casing.

### `importHelpers`

- TypeScript default is `false`
- Our default is `false`

See `target`.

### `incremental`

- TypeScript default is `true` if composite is on, `false` otherwise
- Our default is `true`

Also see `tsBuildInfoFile`.

### `inlineSourceMap`

- TypeScript default is `false`
- Our default is `false`

See `sourceMaps`.

### `inlineSources`

- TypeScript default is `false`
- Our default is `false`

See `sourceMaps`.

### `isolatedModules`

- TypeScript default is `false`
- Our default is `false`

Seems like using it would cause us to lose cross-module/file type checking. And that would seem to be a big loss for no apparent reason.

### `jsx`

- TypeScript default is `"preserve"`
- Our default is `"preserve"`

Out of this package's scope.

### `jsxFactory`

- TypeScript default is `"React.createElement"`
- Our default is `"React.createElement"`

This is only relevant when `"jsx": "react"`. And in most of those cases, `"React.createElement"` would seem to be the desired value.

### `keyofStringsOnly`

- TypeScript default is `false`
- Our default is `false`

This seems to disable a generally desirable type checking feature.

### `listEmittedFiles`

- TypeScript default is `false`
- Our default is `false`

Seems like this would be used mostly for debugging.

### `listFiles`

- TypeScript default is `false`
- Our default is `false`

Seems like this would be used mostly for debugging.

### `locale`

- TypeScript default is `""`
- Our default is `""`

Outside this package's scope.

### `mapRoot`

- TypeScript default is `false`
- Our default is `false`

See [paths](#paths).

### `maxNodeModuleJsDepth`

- TypeScript default is `0`
- Our default is `0`

This is only relevant when `"checkJs": true`. While this could be useful for obtaining types for installed dependencies, many popular open source libraries have `.d.ts` (declaration files) available. So this doesn't seem to provide much value. In addition, if `"checkJs": true`, files in `node_modules` might trigger type errors.

### `moduleResolution`

- TypeScript default is `"Classic"` if `module` is `"AMD"` or `"System"` or `"ES6"` otherwise `"Node"`
- Our default is `"Node"`

### `newLine`

- TypeScript default is platform specific.
- Our default is `"lf"`

TODO: Write something.

### `noEmit`

- TypeScript default is `false`
- Our default is `false`

### `noEmitHelpers`

- TypeScript default is `false`
- Our default is `false`

### `noEmitOnError`

- TypeScript default is `false`
- Our default is `false`

Emitting on errors seems useful during development, as long as the exit code is non-zero.

### `noErrorTruncation`

- TypeScript default is `false`
- Our default is `true`

This seems helpful. See attached screenshots (in my Drive).

TODO: Attach screenshots

### `noFallthroughCasesInSwitch`

- TypeScript default is `false`
- Our default is `false`

It seems that this is more of a linting issue than a type checking issue. How about using this ESLint rule? https://eslint.org/docs/rules/no-fallthrough

### `noImplicitAny`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `noImplicitReturns`

- TypeScript default is `false`
- Our default is `false`

It seems that if the developer cares about the type checking of the return type of a function, then she would be better off specifying it than using this.

### `noImplicitThis`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `noImplicitUseStrict`

- TypeScript default is `false`
- Our default is `false`

Strict mode is widely considered desirable.

### `noLib`

- TypeScript default is `false`
- Our default is `false`

Seems like a rarely used flag.

### `noResolve`

- TypeScript default is `false`
- Our default is `false`

Seems outside the scope of this project.

### `noStrictGenericChecks`

- TypeScript default is `false`
- Our default is `false`

This project will not relax type checking that is enabled by default.

### `noUnusedLocals`

- TypeScript default is `false`
- Our default is `false`

Seems more like the job of a linter. How about this ESLint rule? https://eslint.org/docs/rules/no-unused-vars

### `noUnusedParameters`

- TypeScript default is `false`
- Our default is `false`

Seems more like the job of a linter. How about this ESLint rule?
https://eslint.org/docs/rules/no-unused-vars

### `outDir`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

### `outFile`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

### `paths`

- TypeScript default is `""`
- Our default is `""`

Seems outside the scope of this project.

### `preserveConstEnums`

- TypeScript default is `false`
- Our default is `false`

Seems outside the scope of this project.

### `preserveSymlinks`

- TypeScript default is `false`
- Our default is `false`

Seems outside the scope of this project.

### `preserveWatchOutput`

- TypeScript default is `false`
- Our default is `false`

It seems like the default behavior is generally preferable.

### `pretty`

- TypeScript default is `true` unless piping to another program or redirecting output to a file
- Our default is `""`

Unset, in order to keep the default behavior, which seems the most desirable.

### `project`

- TypeScript default is `""`
- Our default is `""`

A command-line only option.

### `removeComments`

- TypeScript default is `false`
- Our default is `false`

Seems outside of the scope of this project.

### `resolveJsonModule`

- TypeScript default is `false`
- Our default is `true`

Seems like a somewhat popular feature that does not involve drawbacks.

### `rootDir`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

### `rootDirs`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

### `skipLibCheck`

- TypeScript default is `false`
- Our default is `false`

Seems like a debugging feature.

### `sourceMap`

- TypeScript default is `false`
- Our default is `true`

It seems that it is generally desirable to have source maps. We have chosen normal source maps, rather than inline source maps or inline sources, because it seems that it's the simple choice that would serve most projects.

### `sourceRoot`

- TypeScript default is `""`
- Our default is `""`

See [paths](#paths).

### `strict`

- TypeScript default is `false`
- Our default is `true`

See [`Strictness`](#strictness).

### `strictBindCallApply`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `strictFunctionTypes`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `strictPropertyInitialization`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `strictNullChecks`

- TypeScript default is `false`
- Our default is `false`

See [`Strictness`](#strictness).

### `suppressExcessPropertyErrors`

- TypeScript default is `false`
- Our default is `false`

This project will not relax type checking that is enabled by default.

### `suppressImplicitAnyIndexErrors`

- TypeScript default is `false`
- Our default is `false`

This project will not relax type checking that is enabled by default.

### `target`

- TypeScript default is `ES3`
- Our default is `ESNEXT`

We feel that the JavaScript world is stepping away from using TypeScript for down-transpilation in turn for Babel. Also, setting a specific ES version here would mean more frequent breaking changes in releases of this project. Also, we feel that for any kind of project (link to project kinds) we could not predict a desired target.

### `traceResolution`

- TypeScript default is `false`
- Our default is `false`

### `tsBuildInfoFile`

- TypeScript default is `.tsbuildinfo`
- Our default is `.tsbuildinfo`

### `types`

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types

- TypeScript default is `false`
- Our default is `false`

### `typeRoots`

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types


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
