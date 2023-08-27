const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/feedlist', {
            target: 'http://api.service.kr/api/v1',
            changeOrigin: true,
        }),
    );
};