const isProd = process.env.NODE_ENV === 'production';
const pathDir = isProd ? 'inspire' : 'public';
const publicPath = isProd ? '/inspire/' : '/public/';

module.exports = {
  entry: {
    inspire: 'app/web/page/inspire/index.jsx',
    admin: 'app/web/page/admin/index.jsx'
  },
  output: { path: pathDir, publicPath: publicPath },
  plugins:[
    { imagemini: false }
  ]
};
