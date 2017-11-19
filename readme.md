# tsconfigs

[![Greenkeeper badge](https://badges.greenkeeper.io/mightyiam/tsconfigs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mightyiam/tsconfigs.svg?branch=master)](https://travis-ci.org/mightyiam/tsconfigs)
[![Badge: npm version badge for package `tsconfigs`](https://img.shields.io/npm/v/tsconfigs.svg)](https://www.npmjs.com/package/tsconfigs)

> Reusable TypeScript configuration files to extend from.

Strictly following semantic versioning. So no worries.

## Contents

- common
  - universal
  - browser
  - node

## Usage

In your `tsconfig.json`:

```js
{
  // For the `universal` flavor
  "extends": "./node_modules/tsconfigs/universal",

  "compilerOptions": {
    // Override whatever you like
    "declaration": false
  }
}
```

## Why we cannot extend from `"tsconfigs/[flavor]"`

Because Node.js resolution for `extends` was not implemented. Show your enthusiasm at [TypeScript issue #18865](https://github.com/Microsoft/TypeScript/issues/18865).
