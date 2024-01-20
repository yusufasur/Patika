const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use(async (ctx, next) => {
  await next();

  if (ctx.status === 404) {
    ctx.body = "<h1>404 Not Found</h1>";
  }
});

app.use(async (ctx) => {
  if (ctx.url === "/") ctx.body = "<h1>Index Page!</h1>";
  else if (ctx.url === "/about") ctx.body = "<h1>About Page!</h1>";
  else if (ctx.url === "/contact") ctx.body = "<h1>Contact Page!</h1>";
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
