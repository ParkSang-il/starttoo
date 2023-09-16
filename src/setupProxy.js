const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/feed/feedlist', {
            target: 'http://api.starttoo.kr/api/v1',
            changeOrigin: true,
        }),
    );
};