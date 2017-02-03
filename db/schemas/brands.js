'use strict';

module.exports = {
    id: {
        type: 'increments',
        nullable: false,
        primary: true
    },
    identifier: {
        type: 'string',
        maxlength: 10,
        nullable: false,
        unique: true
    },
    description: {
        type: 'string',
        maxlength: 255
    }
};