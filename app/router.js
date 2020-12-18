
module.exports = app => {
  app.get('/demo', app.controller.admin.demo);
  app.get('/inspire', app.controller.admin.inspire);
  app.get('/(.*?)', app.controller.admin.render);
};
