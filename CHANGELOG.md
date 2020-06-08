# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.0](https://github.com/mightyiam/tsconfigs/compare/v4.0.2...v5.0.0) (2020-06-08)


### ⚠ BREAKING CHANGES

* in order to disable automatic inclusion of @types packages,
`compilerOptions.types` is set for all project kinds. in the case of
`browser-module`, `browser-executable`, `webworker-module` and
`agnostic-module`, it was previously unset and now it is set to `[]`. In order
to include an @types package, `compilerOptions.types` must override the value
set by the project kind. Extending from any of the `nodejs` kinds, the override
should also include `"node"`. For example, to include the
`@types/webpack-dev-server` package, the value of your
`compilerOptions.types` should be `["node", "webpack-dev-server"]`.

### Features

* `compilerOptions.types` is set for all kinds ([023cf78](https://github.com/mightyiam/tsconfigs/commit/023cf785e5d4a11b6cda319ce84d7f648b4bc02a))


### Bug Fixes

* skip tagging in npm release script ([8a5c0f2](https://github.com/mightyiam/tsconfigs/commit/8a5c0f235455f7c0e2bbc78d5fae4557e1faa795))

### [4.0.2](https://github.com/mightyiam/tsconfigs/compare/v4.0.1...v4.0.2) (2019-11-22)

### [4.0.1](https://github.com/mightyiam/tsconfigs/compare/v4.0.0...v4.0.1) (2019-10-01)


### Bug Fixes

* include _private base configs in package ([05dafd7](https://github.com/mightyiam/tsconfigs/commit/05dafd7))

## [4.0.0](https://github.com/mightyiam/tsconfigs/compare/v3.0.0...v4.0.0) (2019-09-30)


### ⚠ BREAKING CHANGES

* Complete rewrite.

Co-authored-by: Cleaver Barnes <cbarnes@cleaver.ca>

### Features

* complete rewrite ([37e0629](https://github.com/mightyiam/tsconfigs/commit/37e0629))
