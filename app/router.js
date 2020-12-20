
module.exports = app => {
  app.get('/inspire', app.controller.admin.inspire);
  app.get('/(.*?)', app.controller.admin.render);
};
