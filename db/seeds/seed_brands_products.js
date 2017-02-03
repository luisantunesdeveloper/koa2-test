'use strict';

exports.seed = function(knex, Promise) {
  return knex('brands_products').del() // Deletes ALL existing entries
  .then(function () {
      return knex('brands_products').insert({
        brands_id: 1,
        products_id: 1
      });
    })
    .then(function () {
      return knex('brands_products').insert({
        brands_id: 2,
        products_id: 2
      });
    }).then(function () {
      return knex('brands_products').insert({
        brands_id: 1,
        products_id: 3
      });
    });
};