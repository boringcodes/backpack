# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.5.5](https://github.com/boringcodes/backpack/compare/v1.5.4...v1.5.5) (2021-06-09)

### Bug Fixes

- **webpack:** require.resolve('ts-loader') to fix yarn workspaces problem ([7e6d407](https://github.com/boringcodes/backpack/commit/7e6d407084eaac9000551258bab335007d1c6d25))

### [1.5.4](https://github.com/boringcodes/backpack/compare/v1.5.3...v1.5.4) (2021-06-07)

### Bug Fixes

- **engines/node:** drop support of node 10 as ts-loader@9.2.3 requires >=12.0.0 ([aab24ec](https://github.com/boringcodes/backpack/commit/aab24ec8831d91667bef50649b003b4d7889f4e1))

### [1.5.3](https://github.com/boringcodes/backpack/compare/v1.5.2...v1.5.3) (2021-06-07)

### [1.5.2](https://github.com/boringcodes/backpack/compare/v1.5.1...v1.5.2) (2021-02-13)

### Bug Fixes

- **build:** remove build in .gitignore to fix publish package missing bin/buid file ([381c340](https://github.com/boringcodes/backpack/commit/381c3405fa5a44a53b927d470c50df93310f8855))

### [1.5.1](https://github.com/boringcodes/backpack/compare/v1.5.0...v1.5.1) (2021-02-13)

### Bug Fixes

- **config:** update tsconfig-paths-webpack-plugin to use CWD's tsconfig.json if exists, refactor the default one ([7322980](https://github.com/boringcodes/backpack/commit/732298018a8876c322a64b988d22967c91d94b8f))

## [1.5.0](https://github.com/boringcodes/backpack/compare/v1.4.0...v1.5.0) (2021-01-18)

### Features

- **dotenv:** add { systemvars: true } to dotenv opts to allow system env vars to be understood ([82356dc](https://github.com/boringcodes/backpack/commit/82356dc5714f074b0c68579ee2d24247da2cdbb7))

## [1.4.0](https://github.com/boringcodes/backpack/compare/v1.3.1...v1.4.0) (2021-01-11)

### [1.3.1](https://github.com/boringcodes/backpack/compare/v1.3.0...v1.3.1) (2020-03-28)

## [1.3.0](https://github.com/boringcodes/backpack/compare/v1.2.1...v1.3.0) (2020-03-26)

### Features

- **package:** add prettier & husky ([9f0907b](https://github.com/boringcodes/backpack/commit/9f0907b53922e9e58ec01e92c145c9cf924d8732))

### [1.2.1](https://github.com/boringcodes/backpack/compare/v1.2.0...v1.2.1) (2020-03-21)

## [1.2.0](https://github.com/boringcodes/backpack/compare/v1.1.0...v1.2.0) (2020-03-12)

### Features

- **closes #13:** remove tslint ([#14](https://github.com/boringcodes/backpack/issues/14)) ([d1acde0](https://github.com/boringcodes/backpack/commit/d1acde092ba7316dd6b8ec453b08e12ebce7e0b7)), closes [#13](https://github.com/boringcodes/backpack/issues/13)

## [1.1.0](https://github.com/boringcodes/backpack/compare/v1.0.3...v1.1.0) (2020-02-28)

### Features

- **close #5:** install standard-version as dev dependencies ([#8](https://github.com/boringcodes/backpack/issues/8)) ([24bf84a](https://github.com/boringcodes/backpack/commit/24bf84ae412161cf8a9dfe30570299ad344c02f9)), closes [#5](https://github.com/boringcodes/backpack/issues/5)
- **close #7:** Resolve outdated dependencies ([#10](https://github.com/boringcodes/backpack/issues/10)) ([1d371b1](https://github.com/boringcodes/backpack/commit/1d371b1c9fa463695706c30a51e6e81159aaddb1)), closes [#7](https://github.com/boringcodes/backpack/issues/7)

### [1.0.3](https://github.com/boringcodes/backpack/compare/v1.0.2...v1.0.3) (2020-02-27)

### [1.0.2](https://github.com/boringcodes/backpack/compare/v1.0.1...v1.0.2) (2020-02-26)

### [1.0.1](https://github.com/boringcodes/backpack/compare/v1.0.0...v1.0.1) (2020-02-26)

### Bug Fixes

- **Close #2:** Fix ts-loader use user node module ([#2](https://github.com/boringcodes/backpack/issues/2)) ([951df3a](https://github.com/boringcodes/backpack/commit/951df3a187605e08e9d46d2f606ab12348dc84e4))

## [1.0.0](https://github.com/boringcodes/backpack/compare/v0.8.4...v1.0.0) (2020-02-24)

### Features

- Mod backpack for support typescript tslint and dotenv ([5c1ac65](https://github.com/boringcodes/backpack/commit/5c1ac6556ac8549188de34cfef04d96057d475c8))
