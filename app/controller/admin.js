
module.exports = app => {
  return class AdminController extends app.Controller {
    async demo() {
      const { ctx } = this;
      await ctx.renderClient('demo.js', {});
    }

    async render(ctx) {
      const list = ctx.service.article.getList();
      await ctx.render('admin.js', { url: ctx.url, list });
      // if (ctx.query.mode === 'ssr') {
      // } else {
      //   await ctx.renderClient('admin.js', { url: ctx.url, list });
      // }
    }

    async inspire() {
      const { ctx } = this;
      await ctx.renderClient('inspire.js', {});
    }
  };
};
