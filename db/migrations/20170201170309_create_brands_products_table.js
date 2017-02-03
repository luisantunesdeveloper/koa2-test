"use strict";

const migrate = require('widget-knex-schema');
const brandsProductsSchema = require('../schemas/brands_products');


exports.up = function(knex, Promise) {
  return migrate.createTable(knex, 'brands_products', brandsProductsSchema, true);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('brands_products');
};