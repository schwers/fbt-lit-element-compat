# FBT LitElement Compatability testing

This repo aims to demonstrate issues using fbt with LitElement and fbt

## Packages Details
* webpack&babel are used to compile
* webpack-devserver handles hosting the example page as well as HMR
* fbt and its plugins
* [Lit-Element](https://lit-element.polymer-project.org/)

## Tests and Entrypoint
[`src/index.jsx`](/src/index.jsx) is written to show some examples of using fbt's jsx and programmatic syntax with LitElement. The LitElements defined are registered with the browser, and their html is hardcoded in [`dist/index.html`](/dist/index.html)

### Running
To run this test,
`npm install && npm start`, then visit `http://localhost:8080` and open a developer console to view stack traces.

However please note that as is, there are no run-time errors, there are commented out build-time errors in [`src/index.jsx`](/src/index.jsx). Pictured below are the result of un-commenting said errors.

![LitFBTAutoParametrization error](/test-lit-auto-params.png?raw=true "Test AutoParametrization in Lit")

![LitFBTManual](/test-manually-making-fbt-params.png?raw=true "Test manual params in Lit")