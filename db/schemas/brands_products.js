"use strict"

module.exports = {
    id: {
        type: 'increments',
        nullable: false,
        primary: true
    },
    brands_id: {
        type: 'integer',
        nullable: false,
        unsigned: true
    },
    products_id: {
        type: 'integer',
        nullable: false,
        unsigned: true
    }
};