'use strict';

const koaStaticServer = require('koa-static');

module.exports = function(root, options = {}) {
    return koaStaticServer(root, Object.assign({
        maxage: 1000 * 60 * 60 * 1,
    }, options));
};
