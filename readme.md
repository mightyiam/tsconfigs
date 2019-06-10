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
  "extends": "tsconfigs/universal",

   // If you're using an old version of TypeScript and the previous line does not work, take a look at [TypeScript issue #18865](https://github.com/Microsoft/TypeScript/issues/18865) for a workaround.

  "compilerOptions": {
    // Override whatever you like
    "declaration": false
  }
}
```
