const path = require('path');
const fs = require('fs');
const isProd = process.env.NODE_ENV === 'production';

const pathDir = isProd ? 'inspire' : 'public';
const publicPath = isProd ? '/inspire/' : '/public/';

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: publicPath,
    dir: path.join(app.baseDir, pathDir)
  };

  exports.output = { path: pathDir, publicPath: publicPath };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  return exports;
};
