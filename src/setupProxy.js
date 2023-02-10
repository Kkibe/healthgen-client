const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/home',
    createProxyMiddleware({
      target: 'https://healthgen-api.onrender.com',
      changeOrigin: true,
    })
  );
};