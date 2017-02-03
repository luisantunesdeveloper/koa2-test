'use strict';

import {Model} from 'objection';

export default class Brand extends Model {

	static get tableName() {
		return 'Brands';
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
			products: {
	            relation: Model.ManyToManyRelation,
	            modelClass: Product,
	            join: {
	                from: 'Brands.id',
	                through: {
	                    from: 'Products_Brands.brandId',
	                    to: 'Products_Brands.productId'
	                }
	            },
	            to: 'Products.id'
	        }
	    };
	};
	
}