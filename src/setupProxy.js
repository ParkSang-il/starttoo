const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/feedlist', {
            target: 'http://localhost:8080/api/v1',
            changeOrigin: true,
        }),
    );
};