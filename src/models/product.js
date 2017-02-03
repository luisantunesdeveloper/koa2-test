'use strict';

import {Model} from 'objection';

export default class Product extends Model {

    static get tableName() {
        return 'Products';
    };

    static get idColumn() {
        return 'id';
    };

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['identifier', 'description'],
            properties: {
                id: {
                    type: 'integer'
                },
                identifier: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 10
                },
                description: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 255
                }
            }
        }
    };

    static get relationMappings() {
		return {
			brands: {
	            relation: Model.ManyToManyRelation,
	            modelClass: Brand,
	            join: {
	                from: 'Products.id',
	                through: {
	                    from: 'Products_Brands.productId',
	                    to: 'Products_Brands.brandId'
	                }
	            },
	            to: 'Brands.id'
	        }
	    };
	};
}