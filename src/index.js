'use strict';

module.exports = function VueCLIAdapter(api, opts = {}) {

    api.registerMethod('modifyStaticServerOptions', {
        type: api.API_TYPE.MODIFY,
        description: '对静态服务配置进行修改, 需要返回所有参数',
    });

    api.onServerInitDone(({ app, config, options }) => {
        const staticServer = require('./staticServer');
        const contentBase = config.contentBase;
        // static file
        const staticOptions = api.applyPluginHooks('modifyStaticServerOptions', config.options || {}) || {};
        if (staticOptions.disabled !== true) {
            const koaStatic = staticServer(contentBase, staticOptions);
            if (koaStatic) {
                if (options.type === 'vusion') { // 特殊化处理
                    const oc = options.config;
                    const prePath = contentBase.replace(oc.root, '');
                    app.use((ctx, next) => {
                        if (ctx.url) {
                            ctx.url = ctx.url.replace(prePath, '');
                        }
                        return next();
                    });
                }
                app.use(koaStatic);
            }
        }
    });
};
