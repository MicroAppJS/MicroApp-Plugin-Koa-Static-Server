'use strict';

module.exports = function KoaStaticServer(api, opts = {}) {

    // commands
    require('./commands/version')(api);

    api.registerMethod('modifyStaticServerOptions', {
        type: api.API_TYPE.MODIFY,
        description: '对静态服务配置进行修改, 需要返回所有参数',
    });

    api.onServerInitDone(({ app, config, args }) => {
        const staticServer = require('./staticServer');
        // static file
        const staticOptions = api.applyPluginHooks('modifyStaticServerOptions', opts || {}) || {};
        if (staticOptions.disabled !== true) {
            const contentBase = staticOptions.root || '.';
            const koaStatic = staticServer(contentBase, staticOptions);
            app.use(koaStatic);
        }
    });
};

module.exports.configuration = {
    description: '针对 Koa 服务的静态服务中间件',
};
