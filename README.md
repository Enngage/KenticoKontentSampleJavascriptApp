# Kentico Cloud Sample Javascript application

This sample application uses the [Kentico Cloud Delivery TypeScript SDK](https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK) to showcase how you can use the SDK in Javascript applications.

## Prerequisites

- NodeJS 
- NPM > 3

## Installation

Clone / download this repository, navigate to the root folder of this package and install node packages:

```
npm i
```

### Run application

```
npm start
```

Your browser will open `http://localhost:99/`

### Making changes

To use the Typescript SDK for Kentico Cloud you first need to prepare it for usage in your browser. For this you need to compile `cloud-api.js` with `browserify`:

```
browserify cloud-api.js -o bundle.js
```
You might need to install browserify like this: 
```
npm i browserify -g
```

Note: If you don't see any changes after refreshing your browser, use **CTRL + F5** to flush the browser's cache.
