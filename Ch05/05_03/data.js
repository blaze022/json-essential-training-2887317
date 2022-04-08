const rawProductData = '[{"id":"259","name":"Raspberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-raspberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"},{"id":"429","name":"Strawberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-strawberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"},{"id":"436","name":"Blueberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-blueberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png"},{"id":"437","name":"Lemon-Lime Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport lemon-lime\u00c2\u00a0mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals","image_title":"mineral-water-lemon-lime_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-lemon-lime_600px.png"},{"id":"438","name":"Peach Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport peach mineral water \u00c2\u00a0fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-peach_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-peach_600px.png"},{"id":"439","name":"Orange Mineral Water","description":"An 8-ounce serving of refreshing H+ Sport orange mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-orange_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-orange_600px.png"}]';

const rawPersonData = '{"cards":[{"img":{"src":"HenryTwill.jpg","alt":"HenryTwill Photo"},"cardInfo":{"cardName":"Henry Twill, Jr","cardTitle":"CEO"},"cardText":"Henry Twill Jr. is the founder and CEO of H+ Sports. Previously he was an athletic trainer working with several top athletes, making sure that they had the direction and proper coaching to keep them at the top of their game. Henry’s passion for finding natural alternatives led him to developing H+ Sport Multivitamins. The supplements became a success with his clients and led to the creation of H+ Sports."},{"img":{"src":"JessicaNewton.jpg","alt":"JessicaNewton Photo"},"cardInfo":{"cardName":"Jessica Newton-Smith, MBA","cardTitle":"CFO"},"cardText":"Jessica Newton-Smith joined us in 2012 and brings more than 10 years of financial management experience to H+ Sports, spanning a variety of companies and industries ranging from  Fortune 500 agencies to start-ups. She has extensive experience working in emerging markets and in the consumer and retail sectors."},{"img":{"src":"PhiTang.jpg","alt":"PhiTang Photo"},"cardInfo":{"cardName":"Phi Tang, MBA","cardTitle":"Director of Product Development"},"cardText":"Phi Tang joined H+ Sports in 2007 as Manager of Marketing Research. He was promoted to Director of Product Development in 2011. He has made major contributions to the discovery, development, and implementation of the H+ Sport product lines. Before joining the company he worked as a scientific expert and brings vast knowledge of ingredients and new technologies."},{"img":{"src":"MariaSontas.jpg","alt":"MariaSontas Photo"},"cardInfo":{"cardName":"Maria Sontas","cardTitle":"Director of Marketing"},"cardText":"Maria Sontas has been with H+ Sport since 2010. She oversees the company’s marketing strategy – ensuring advertising campaigns, social media initiatives, and events are planned to position the company strongly in a competitive marketplace. Maria is a competing triathlete and her passion for our products shows in her unique ability to drive awareness and increase our presence around the world."},{"img":{"src":"AngelaHaston.jpg","alt":"AngelaHaston Photo"},"cardInfo":{"cardName":"Angela Hashton","cardTitle":"Director of Sales"},"cardText":"Angela Hashton joined the company in 2009, to initiate new relationships for our growing line of H+ Sports active apparel. After being with the company for a year, she was promoted to Director of Sales. Angela is the drive behind the H+ Sport ACTIVE product line and has an uncanny ability to formulate strategies that have helped build our unified sales force. Educating people about health and nutrition is something that Angela holds dear."},{"img":{"src":"MichaelLewiston.jpg","alt":"MichaelLewiston Photo"},"cardInfo":{"cardName":"Michael Lewiston, MFA","cardTitle":"Creative Director"},"cardText":"Michael Lewiston is a multi-faceted creative person who began his career as a designer for a small business firm, while also working as an independent painter and sculptor. In 2007, Henry Twill was impressed by Michael’s creative work in a national ad campaign for a high profile sports apparel company. Henry approached Michael, and asked him to manage creative direction for the H+ Sport ACTIVE apparel line."}]}';

/*
example for how to create schema and validate them


const Ajv = require("ajv")
const ajv = new Ajv()

const schema =  {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/schemas/products.json",
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
    }
  }
}

const validate=ajv.compile(schema)

test([{"id":"259","name":"Raspberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-raspberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"},{"id":"429","name":"Strawberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-strawberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"},{"id":"436","name":"Blueberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-blueberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png"},{"id":"437","name":"Lemon-Lime Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport lemon-lime\u00c2\u00a0mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals","image_title":"mineral-water-lemon-lime_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-lemon-lime_600px.png"},{"id":"438","name":"Peach Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport peach mineral water \u00c2\u00a0fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-peach_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-peach_600px.png"},{"id":"439","name":"Orange Mineral Water","description":"An 8-ounce serving of refreshing H+ Sport orange mineral water fulfills a day&#31;s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-orange_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-orange_600px.png"}])
function test(data)
{
const valid=validate(data);
if(valid)console.log("Valid");
else console.log("Invalid:" +ajv.errorsText(validate.error))

}
*/