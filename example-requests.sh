#!/bin/sh


##############
### Insert ###
##############


# Create some brands.
curl -H "Content-Type: application/json" -d '{"identifier":"BX", "description":"Brand X", "products_id": "1"}' http://localhost:5050/api/brands
curl -H "Content-Type: application/json" -d '{"identifier":"BY", "description":"Brand Y", "products_id": "2"}' http://localhost:5050/api/brands

# Create some products.
curl -H "Content-Type: application/json" -d '{"identifier":"PX", "description":"Product X", "brands_id": "1"}' http://localhost:5050/api/products
curl -H "Content-Type: application/json" -d '{"identifier":"PY", "description":"Product Y", "brands_id": "2"}' http://localhost:5050/api/products


###########
### Get ###
###########


# Get all brands.
curl http://localhost:5050/api/brands

# Get all products.
curl http://localhost:5050/api/products


##############
### Delete ###
##############


# Delete a brand.
curl -X DELETE http://localhost:5050/api/brands/3
curl http://localhost:5050/api/brands