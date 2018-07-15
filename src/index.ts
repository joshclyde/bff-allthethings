import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();

app.use(async (ctx, next) => {
  // tslint:disable-next-line
  console.log("Url:", ctx.url);
  // Pass the request to the next middleware function
  await next();
});

const router = new Router();
router.get("/*", async (ctx) => {
  ctx.body = "Hello World!";
});
app.use(router.routes());

app.listen(4000);

// tslint:disable-next-line
console.log("Server running on port 4000");
