# FBT Inferno Compat testing

This repo aims to demonstrate issues using fbt with Inferno's inferno-compat mod.

## Packages Details
* webpack&babel are used to compile
* webpack-devserver handles hosting the example page as well as HMR
* fbt and its plugins
* [inferno-compat](https://www.npmjs.com/package/inferno-compat)
  * inferno-compat is a shim for migrating from an existing React application to using [Inferno](https://infernojs.org/). It is installed in addition to inferno, its indivdual feature pacakges, and babel-plugin-inferno. It works by using [webpack's module alias'ing](/webpack.config.js) to convert imports of `react` and `react-dom` into `inferno-compat` (which itself is a shim layer to `inferno`)
  * Note: `inferno`'s `babel-plugin-inferno` is necessary as well, as it will convert JSX into `inferno`'s vDom format.


## Tests and Entrypoint
[`src/index.jsx`](/src/index.jsx) is written with React and attempts to render four lines of text. Lines 2-4 each test different features of FBT:
* simple usage of FBT JSX api, includes nested `<strong />` and `<em >` tags.
* Params via `<FbtParam >`
* Rendering programmatic call to `fbt()`

### Running
To run this test,
`npm install && npm start`, then visit `http://localhost:8080` and open a developer console to view stack traces.

There should be four lines of text rendered. Currently there are two, with the last two tests throwing the following errors:

![InfernoFBT Errors](/inferno-fbt-stacktraces.png?raw=true)