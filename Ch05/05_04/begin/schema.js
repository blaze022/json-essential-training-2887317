// Schema for product data
var productSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://hplussport.com/schemas/products.json",
  "title": "h+ Sport Products",
  "description": "Schema for h+ Sport product data",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
          "type": "string"
      },
      "name": {
          "type": "string"
      },
      "description": {
          "type": "string"
      },
      "image_title": {
          "type": "string"
      },
      "image": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "name",
      "description",
      "image_title",
      "image"
    ]
  }
};

/*
the schema just says that a particular key must have a value of this type
it just says what type of values is supported by our schema it does not care
 about any missing data so we add a required field to say that these keys must exist 
 in our data or else validator should raise an error if these keys are missing"


 try the above schema in runkit using ajv validator and remove some keys to see errors
 and in  required field remove that deleted  data to see that errors are no more shown
 */
