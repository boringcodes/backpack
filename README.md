![backpack](https://cloud.githubusercontent.com/assets/4060187/21872211/318795e8-d835-11e6-8376-bea370605361.png)

<div align="center">
  <a href="https://github.com/boringcodes/backpack/commits" aria-label="Commitizen Friendly">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
  </a>
    <a href="https://github.com/boringcodes/backpack" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
  <a href="https://github.com/boringcodes/backpack/actions" aria-label="Lint Status">
    <img src="https://img.shields.io/github/workflow/status/boringcodes/backpack/lint-source?style=flat-square&label=lint">
  </a>
  <a href="https://david-dm.org/boringcodes/backpack" aria-label="Dependencies Status">
    <img src="https://img.shields.io/david/boringcodes/backpack?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@boringcodes/backpack" aria-label="NPM Version">
    <img src="https://img.shields.io/npm/v/@boringcodes/backpack?color=brightgreen&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@boringcodes/backpack" aria-label="NPM Downloads">
    <img src="https://img.shields.io/npm/dm/@boringcodes/backpack?style=flat-square">
  </a>
  <a href="https://github.com/boringcodes/backpack/blob/master/LICENSE" aria-label="MIT License">
    <img src="https://img.shields.io/github/license/boringcodes/backpack?color=brightgreen&style=flat-square">
  </a>
  <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
    <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
  </a>
</div>

### Features

Backpack with the following added features:

- [x] TypeScript using ([ts-loader](https://github.com/TypeStrong/ts-loader))
- [x] DotENV using ([dotenv-webpack](https://github.com/mrsteele/dotenv-webpack))

## Installation

Either through cloning with git or by using [yarn](https://yarnpkg.com/) (the recommended way):

```bash
yarn global add @boringcodes/backpack
```

And backpack will be installed globally to your system path.

You can also install backpack as a repository dependency:

```bash
yarn add @boringcodes/backpack
```

and add the following scripts to your package.json like this:

```json
{
  "scripts": {
    "dev": "backpack dev",
    "build": "backpack build"
  }
}
```

After that there are just a few ~~conventions~~ defaults:

- `src/index.ts`: the entry of your app.

...actually that's it.

You can then run your application in development mode:

```bash
yarn run dev
```

Or build source by the following command:

```bash
yarn run build
```

### Custom configuration

For custom advanced behavior, you can create a `backpack.config.js` in the root of your project's directory (next to `package.json`).

```js
// backpack.config.js
// IMPORTANT: This file is not going through babel transformation.
// You can however use the ES2015 features supported by your Node.js version.
module.exports = {
  /* config options here */
};
```

### Customizing webpack config

[Example](https://github.com/palmerhq/backpack/tree/master/examples/with-custom-webpack-config)

To extend webpack, you can define a function that extends its config via `backpack.config.js`.

```js
// backpack.config.js
module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config
    return config;
  },
};
```

### Building for Production

Add a npm script for the build step:

```json
{
  "scripts": {
    "dev": "backpack",
    "build": "backpack build"
  }
}
```

Then run the build command and start your app

```bash
yarn run build
node ./build/index.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/backpack/blob/master/LICENSE)
