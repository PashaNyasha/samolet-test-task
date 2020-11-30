const { createProxyMiddleware  } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/opendata", {
      target: "https://data.gov.ru/sites/default/files",
      changeOrigin: true,
    })
  );
};
