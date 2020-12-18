
module.exports = app => {
  app.get('/login', app.controller.admin.login);
  app.get('/inspire', app.controller.admin.inspire);
  app.get('/(.*?)', app.controller.admin.render);
};
