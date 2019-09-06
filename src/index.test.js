'use strict';

/* global expect */

const MicroApp = require('@micro-app/cli/bin/base');
const service = MicroApp.service;
const path = require('path');

describe('Plugin KoaStaticServerAdapter', () => {

    it('KoaStaticServerAdapter', () => {
        service.registerPlugin({
            id: 'test:KoaStaticServerAdapter',
            link: path.join(__dirname, './index.js'),
        });

        service.run('help', { _: [] });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

});
