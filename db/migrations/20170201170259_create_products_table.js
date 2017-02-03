"use strict";

const migrate = require('widget-knex-schema');
const productsSchema = require('../schemas/products');


exports.up = function(knex, Promise) {
  return migrate.createTable(knex, 'products', productsSchema, true);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};