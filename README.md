# Kentico Cloud Sample Javascript application

This sample application uses the [Kentico Cloud Delivery TypeScript SDK](https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK) to showcase how you can use the SDK in Javascript applications.

[![npm version](https://badge.fury.io/js/kentico-cloud-sample-javascript-app.svg)](https://www.npmjs.com/package/kentico-cloud-sample-javascript-app)

## Prerequisites

- NodeJS > 8
- NPM > 3
- [Browserify](https://www.npmjs.com/package/browserify) 
- [http-server](https://www.npmjs.com/package/http-server) 

## Getting started

### Install package

```
npm i kentico-cloud-sample-javascript-app
```

### Run it

Navigate to the root folder of this package with Node.js commant prompt and execute the `app` script:

```
node app
```

Once the server is running, navigate to `http://localhost:99/` in your browser.

### Making changes

To use the Typescript SDK for Kentico Cloud you first need to prepare it for usage in your browser. For this you need to compile `cloud-api.js` with `browserify`:

```
browserify cloud-api.js -o bundle.js
```

Note: If you don't see any changes after refreshing your browser, use **CTRL + F5** to flush the browser's cache.
