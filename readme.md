# ⚙️ tsconfigs

[![Greenkeeper badge](https://badges.greenkeeper.io/mightyiam/tsconfigs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mightyiam/tsconfigs.svg?branch=master)](https://travis-ci.org/mightyiam/tsconfigs)
[![Badge: npm version badge for package `tsconfigs`](https://img.shields.io/npm/v/tsconfigs.svg)](https://www.npmjs.com/package/tsconfigs)

## Overview 🦅

This is a set of reusable TypeScript configuration files to extend from.

Say you're starting a new TypeScript project. And you're setting up the `tsconfig.json`. If you're a TypeScript 🧙‍ you quickly fill in some options and you're done. But If you're a meer mortal 🤔 like most of us, you go back to the documentation every time. After several times of that 💡 I decided to write this little project.

If your project is one of the following kinds of projects, feel free to extend from this set of TypeScript configurations instead of writing your own from blank. And then override any options you choose to.

## Project kinds 📜

| | [Module](#module-project-options) | [Executable](#executable-project-options) |
|-| ------ | ---------- |
| [**Browser**](#browser-project-options) | `browser-module` | `browser-executable` |
| [**Node.js**](#nodejs-project-options) | `nodejs-module` | `nodejs-executable` |
| [**Agnostic**](#agnostic-project-options) | `agnostic-module` |

## Example `tsconfig.json` 👍

```jsonc
{
  "extends": "tsconfigs/nodejs-executable",
  "compilerOptions": {
    "outDir": "lib"
  },
  "include": [
    "src/**/*"
  ]
}
```

## Executable project options

| Option | Default value | Our value | Comment |
| ------ | ------------------ | --------- | ----------- |
| `composite` | `true` | `false` | It seems to have no benefit for executables and it necessitates generation of declaration files, which seem useless in executables, as well.

## Module project options

| Option | Default value | Our value | Comment |
| ------ | ------------------ | --------- | ----------- |
| `declaration` | `false` | `true` | Because we'd like to provide the importer with type definitions. |

## Browser project options

| Option | Default value | Our value |
| ------ | ------------------ | --------- |
| `lib` | depends | `["ESNext","DOM","WebWorker"]` |
| `module` | depends | `"ESNext"` |

## Node.js project options

| Option | Default value | Our value | Comment |
| ------ | ------------------ | --------- | ------- |
| `lib` | depends | `["ESNext"]`. | You'd most likely also like to install the [`@types/node` package](https://www.npmjs.com/package/@types/node). |
| `module` | depends | `"CommonJS"` |

## Agnostic project options

| Option | Default value | Our value | Comment |
| ------ | ------------------ | --------- | ------- |
| `lib` | depends | `["ESNext"]` |
| `module` | depends | `"CommonJS"` | While for small packages, CommonJS could be just fine, for larger packages, where the ability to perform tree shaking is desirable, it seems that the agnostic project author should consider providing two builds. One CommonJS build and one ES modules build.

## Common project options

| Option | Default value | Our value | Comment |
| ------ | ------------------ | --------- | ----------- |
| `allowSyntheticDefaultImports` | depends | `true` | [Stack Overflow question](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file) |
| `esModuleInterop` | `false` | `true` | [Stack Overflow question](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)
| `forceConsistentCasingInFileNames` | `false` | `true` | While it does not enforce case sensitivity, it at least enforces consistent casing across references. |
| `moduleResolution` | depends | `"node"` | The de-facto standard. |
| `newLine` | depends | `"LF"` | For the sake of consistent build artifacts cross-platform. |
| `noErrorTruncation` | `false` | `true` | Screenshots: [`false`](assets/noErrorTruncation.false.png) / [`true`](assets/noErrorTruncation.true.png) |
| `resolveJsonModule` | `false` | `true` | Seems like a popular feature that does not involve drawbacks. |
| `sourceMap` | `false` | `true` | We have chosen regular source maps because it seems like the simple choice that would serve most projects.
| `strict` | `false` | `true` | See [`Strictness`](#strictness). |
| `target` | `"es3"` | `"esnext"` | Down-transpilation is outside the scope of this project. Also, consider using [Babel](https://babeljs.io) instead of TypeScript for that. |

## Strictness

We presume that strict type checking is generally desirable.

New type checking features in future releases of TypeScript are, per policy, turned off by default, for backward compatibility. Effectively making new type features, *opt-in*.

The `strict` option, however, turns on a set of strict type checking options. New strict options from future TypeScript releases will be included in it, effectively making new type checking features *opt-out*.

tsconfigs maintains the *opt-out* behavior: we turn `strict` on and yet keep the individual type check options that it includes, off.

## Paths

We would love to include some [path options like `include` and `outDir`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#details), but, we feel that it would not be reliable, because TypeScript resolves relative paths from the configuration file in which they appear and not from the end-configuration file. See [this issue](https://github.com/mightyiam/tsconfigs/issues/83).
