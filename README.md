# Kentico Cloud Sample Javascript application

This package uses `Kentico Cloud Delivery TypeScript SDK` to showcase how it can be used in `Javascript` applications

### Run application

Navigate to the root folder of this package with `Node.js command prompt` and use following command:

```
node start
```

Your browser will open `http://localhost:99/`

### Making changes

In order to use `Kentico Cloud SDK` you need to first prepare it for usage in browser. For this you need to compile `cloud-api.js` with `browserify`:

```
browserify cloud-api.js -o bundle.js
```

Note: If you don't see changes after refreshing your browser, use **CTRL+F5** to flush the browser's cache




