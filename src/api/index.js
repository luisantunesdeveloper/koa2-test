// Middleware for routing
import Router from 'koa-router';

import Brands from './brands';
import Products from './products';

// Set a prefix of our api, in this case gin, it could be config aware
const api = 'gin'
const router = new Router();

export default (models) => {
	router.prefix(`/${api}`);
	Brands(router, models.Brand);
	Products(router, models.Product);
	return router;
}