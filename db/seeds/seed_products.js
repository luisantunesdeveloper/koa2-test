'use strict';

exports.seed = function(knex, Promise) {
  return knex('products').del() // Deletes ALL existing entries
  .then(function () {
      return knex('products').insert({
        identifier: 'PR1',
        description: 'Product 1'
      });
    })
    .then(function () {
      return knex('products').insert({
        identifier: 'PR2',
        description: 'Product 2'
      });
    }).then(function () {
      return knex('products').insert({
        identifier: 'PR3',
        description: 'Product 3'
      });
    });
};