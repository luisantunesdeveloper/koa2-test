'use strict';

// Middleware for routing
import Router from 'koa-router';
// API Resources
import Brands from './brands';
import Products from './products';
// DB
import Knex from 'knex';
import config from '../../config/db';
// Models
import Brand from '../models/brand';
import Product from '../models/product';
import {Model} from 'objection';

// Initialize knex.
const knex = Knex(config.development);
// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

// Set a prefix of our api, in this case gin, it could be config aware and include the version also
const api = 'api'
const router = new Router();

export default () => {
	router.prefix(`/${api}`);
	Brands(router, Brand);
	Products(router, Product);
	return router;
}