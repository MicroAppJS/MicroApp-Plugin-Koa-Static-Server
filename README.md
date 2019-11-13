# Micro APP Plugin - Koa Static Server

[Plugin] add koa static server plugin.

基于webpack多入口的多仓库业务模块开发的插件应用框架核心库.

[![Coverage Status][Coverage-img]][Coverage-url]
[![CircleCI][CircleCI-img]][CircleCI-url]
[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[Coverage-img]: https://coveralls.io/repos/github/MicroAppJS/MicroApp-Plugin-Koa-Static-Server/badge.svg?branch=master
[Coverage-url]: https://coveralls.io/github/MicroAppJS/MicroApp-Plugin-Koa-Static-Server?branch=master
[CircleCI-img]: https://circleci.com/gh/MicroAppJS/MicroApp-Plugin-Koa-Static-Server/tree/master.svg?style=svg
[CircleCI-url]: https://circleci.com/gh/MicroAppJS/MicroApp-Plugin-Koa-Static-Server/tree/master
[npm-img]: https://img.shields.io/npm/v/@micro-app/plugin-koa-static-server.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-app/plugin-koa-static-server
[download-img]: https://img.shields.io/npm/dm/@micro-app/plugin-koa-static-server.svg?style=flat-square
[download-url]: https://npmjs.org/package/@micro-app/plugin-koa-static-server

## Install

```sh
yarn add @micro-app/plugin-koa-static-server
```

or

```sh
npm install -S @micro-app/plugin-koa-static-server
```

## Usage

### 在项目 `根目录` 的 `micro-app.config.js` 文件中配置

```js
module.exports = {
    // ...

    plugins: [ // 自定义插件
        ['@micro-app/plugin-koa-static-server', {
            // root: 1,
        }],
    ],
};
```
