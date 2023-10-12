const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware([
            '/feed/feedlist',
            '/feed/tattoo_thema'
        ], {
            target: 'http://api.starttoo.kr/api/v1',
            changeOrigin: true,
        }),
    );
};