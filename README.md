# Kentico Cloud Sample Javascript application

This package uses 'KenticoCloudSDK(TODO: add link to NPM package) to showcase how it can be used in `Javascript` applications

[![npm version](https://badge.fury.io/js/kentico-cloud-angular2-sdk.svg)](https://www.npmjs.com/package/kentico-cloud-angular2-sdk)

## Prerequisites

- NodeJS > 8
- NPM > 3
- [Browserify](https://www.npmjs.com/package/browserify) 
- [http-server](https://www.npmjs.com/package/http-server) 

## Getting started

### Install package

```
npm install package-name(todo)
```

### Run it

Navigate to the root folder of this package with `Node.js commant prompt` and execute `app` script:

```
node app
```

Once the server is running navigate to `http://localhost:99/`

### Making changes

In order to use `Kentico Cloud SDK` you need to first prepare it for usage in browser. For this you need to compile `cloud-api.js` with `browserify`:

```
browserify cloud-api.js -o bundle.js
```

Note: If you don't see changes after refreshing your browser, use **CTRL+F5** to flush the browser's cache




