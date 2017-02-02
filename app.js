import koa from 'koa';
// Middleware for routing
import middleware from 'koa-router'
// Middleware for logging pretty messages.
import logger from 'koa-logger';
// Middleware for accesing json from ctx.body.
import parser from 'koa-bodyparser';
// A seperate file with my routes.
import api from './api';
import handleErrors from './middlewares/handleErrors';
// Add db here
import db from 'db-test';
db.setup('development');

// Applies all routes to the router.
const router = api(middleware(), db);
// Creates the application.
const app = new koa();

app
	.use(handleErrors)
    .use(logger()) // Logs information.
    .use(parser()) // Parses json body requests.
    // A universal interceptor, that prints the ctx each time a request
    // is made on the server.
    .use(async (ctx, next) => {
        console.log(ctx);
        return await next();
    })
    .use(router.routes()) // Assigns routes.
    .use(router.allowedMethods());

// Start the application.
app.listen(5050, () => console.log('Listening on port 5050.'));

export default app;