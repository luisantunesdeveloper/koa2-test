'use strict';

exports.seed = function(knex, Promise) {
  return knex('brands').del() // Deletes ALL existing entries
    .then(function () {
      return knex('brands').insert({
        identifier: 'BR1',
        description: 'Brand 1'
      });
    }).then(function () {
      return knex('brands').insert({
        identifier: 'BR2',
        description: 'Brand 2'
      });
    });
};