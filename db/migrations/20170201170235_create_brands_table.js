"use strict";

const migrate = require('widget-knex-schema');
const brandsSchema = require('../schemas/brands');


exports.up = function(knex, Promise) {
  return migrate.createTable(knex, 'brands', brandsSchema, true);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('brands');
};