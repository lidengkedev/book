# VUE SSR 服务端渲染

## 创建一个新项目

```bash
vue init webpack-simple vue-ssr-example
```
## 安装依赖

```bash
cd vue-ssr-example

npm install

# 或

yarn
```
## 安装服务端插件

```bash
npm install express vue-server-renderer

npm install vue-ssr-webpack-plugin -D

# 或

yarn add express vue-server-renderer

yarn add vue-webpack-plugin
```
## 开始部署

### 配置主函数
```javascript
// src/main.server.js

import Vue from 'vue'
import App from './App.vue'

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
    return Promise.resolve(
        new Vue({
            render: h => h(App)
        })
    );
}
```
### 配置入口文件

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>vue-ssr-example</title>
    </head>
    <body>
        <!-- vue-ssr-outlet -->
        <script src="/dist/build.js"></script>
    </body>
</html>
```

### 配置打包工具

```javascript
const path = require('path')
const webpack = require('webpack')

// Load the Vue SSR plugin. Don`t forget this. :P

module.exports = {
    // The target should be set to "node" avoid packaging build-ins.
    target: 'node',
    // The entry should be our server entry file, not the default one.
    entry: './src/main.server.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        pubilcPath: '/dist/',
        filename: 'build.js',
        // Outputs node-compatible modules instead of browser-compatible.
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
    // We can remove the devServer block.
    performance: {
        hints: false
    },
    // Aviods bundling external dependencies, so node can load them directly from node_modules
    externals: Object.keys(require('./package.json').dependencies),
    devtool: 'source-map',
    // No need to put these behind a production env variable.
    plugins: [
        // Add the SSR plugin here.
        new VueSSRPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}
```
### 配置启动脚本

```json
{
    ...
    "scripts": {
        ...
        "build": "npm run build:server && npm run build:client",
        "build:client": "cross-env NODE_ENV=production webpack --proress --hide-modules",
        "build:server": "cross-env NODE_ENV=production webpack --config webpack.server.config.js --pregress --hide-modules"
    },
    ...
}
```
### 配置服务API

```javascript
#!user/bin/env node

// server.js

const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
    // Load the SSR bundle width require.
    require('./dist/vue-ssr-bundle.json'),
    {
        // Yes, I know, readFileSync is bad practice. It is just shorter to read here.
        template: fs.readFileSync('./index.html', 'utf-8')
    }
)

// Create the express app.
const app = express();

// Server static assets from ./dist on the /dist route.
app.use('/dist', express.static('dist'));

// Render all other routes width the bundleRenderer.
app.get('*', (req, res) => {
    bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path })
    .pipe(res);
});

// Bind the app to this port.
app.listen(8080);
```

### 启动项目

```bash
# Build client and server bundles
$ npm run build

# Run the HTTP server
$ node ./server.js
```