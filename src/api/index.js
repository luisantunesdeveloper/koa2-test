// Middleware for routing.
import Brands from './brands';
import Products from './products';

// Set a prefix of our api, in this case gin, it could be config aware
const api = 'gin'

export default (router, db) => {
	router.prefix(`/${api}`);
	router = Brands(db.models.Brand, router);
	router = Products(db.models.Product, router);
	return router;
}