const rawWeatherData = '[{"id":"3033","name":"Pondicherry","name_ascii":"Pondicherry","lat":"11.93499371","lng":"79.83000037","population":"227411","country_id":"88","province":"Puducherry","country_name":"India","unit":"F","season":"spring","forecast":[{"date":"06\/06\/2021","temp_min":84.919999999999987494447850622236728668212890625,"temp_max":85.063999999999992951416061259806156158447265625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/07\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":85.96399999999999863575794734060764312744140625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"sun","condition_desc":"Blue skies all day long!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/sun_4623792.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/sun_16240.png"},{"date":"06\/08\/2021","temp_min":84.7399999999999948840923025272786617279052734375,"temp_max":84.830000000000012505552149377763271331787109375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/09\/2021","temp_min":84.8119999999999976125764078460633754730224609375,"temp_max":86.198000000000007503331289626657962799072265625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/10\/2021","temp_min":84.7579999999999955662133288569748401641845703125,"temp_max":86.539999999999992041921359486877918243408203125,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/11\/2021","temp_min":85.424000000000006593836587853729724884033203125,"temp_max":85.657999999999987039700499735772609710693359375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"storm","condition_desc":"Watch out for storms!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/storm_190935.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/storm_16240.png"},{"date":"06\/12\/2021","temp_min":84.650000000000005684341886080801486968994140625,"temp_max":84.7759999999999962483343551866710186004638671875,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/13\/2021","temp_min":84.650000000000005684341886080801486968994140625,"temp_max":85.099999999999994315658113919198513031005859375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/14\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":86,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/15\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":84.8840000000000003410605131648480892181396484375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/16\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":84.7039999999999935198502498678863048553466796875,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"sun","condition_desc":"Blue skies all day long!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/sun_4623792.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/sun_16240.png"}]}]';

/*
const Ajv = require("ajv")
const ajv = new Ajv()

const schema =  {
    
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "http://explorecalifornia.com.com/schemas/weather.json",
        "type": "array",
        "title": "The root schema",
        "description": "The root schema comprises the entire JSON document.",
        "default": [],
        
        "items": {
            "$id": "#/items",
            "anyOf": [
                {
                    "$id": "#/items/anyOf/0",
                    "type": "object",
                    "title": "The first anyOf schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "required": [
                        "id",
                        "name",
                        "name_ascii",
                        "lat",
                        "lng",
                        "population",
                        "country_id",
                        "province",
                        "country_name",
                        "unit",
                        "season",
                        "forecast"
                    ],
                    "properties": {
                        "id": {
                            "$id": "#/items/anyOf/0/properties/id",
                            "type": "string",
                            "title": "The id schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "name": {
                            "$id": "#/items/anyOf/0/properties/name",
                            "type": "string",
                            "title": "The name schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "name_ascii": {
                            "$id": "#/items/anyOf/0/properties/name_ascii",
                            "type": "string",
                            "title": "The name_ascii schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "lat": {
                            "$id": "#/items/anyOf/0/properties/lat",
                            "type": "string",
                            "title": "The lat schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "lng": {
                            "$id": "#/items/anyOf/0/properties/lng",
                            "type": "string",
                            "title": "The lng schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "population": {
                            "$id": "#/items/anyOf/0/properties/population",
                            "type": "string",
                            "title": "The population schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "country_id": {
                            "$id": "#/items/anyOf/0/properties/country_id",
                            "type": "string",
                            "title": "The country_id schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "province": {
                            "$id": "#/items/anyOf/0/properties/province",
                            "type": "string",
                            "title": "The province schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "country_name": {
                            "$id": "#/items/anyOf/0/properties/country_name",
                            "type": "string",
                            "title": "The country_name schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "unit": {
                            "$id": "#/items/anyOf/0/properties/unit",
                            "type": "string",
                            "title": "The unit schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "season": {
                            "$id": "#/items/anyOf/0/properties/season",
                            "type": "string",
                            "title": "The season schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": ""
                        },
                        "forecast": {
                            "$id": "#/items/anyOf/0/properties/forecast",
                            "type": "array",
                            "title": "The forecast schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": [],
                            
                            "items": {
                                "$id": "#/items/anyOf/0/properties/forecast/items",
                                "anyOf": [
                                    {
                                        "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0",
                                        "type": "object",
                                        "title": "The first anyOf schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": {},
                                        "required": [
                                            "date",
                                            "temp_min",
                                            "temp_max",
                                            "season_min",
                                            "season_max",
                                            "condition_name",
                                            "condition_desc",
                                            "condition_video",
                                            "condition_icon"
                                        ],
                                        "properties": {
                                            "date": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/date",
                                                "type": "string",
                                                "title": "The date schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": ""
                                            },
                                            "temp_min": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/temp_min",
                                                "type": "number",
                                                "title": "The temp_min schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": 0.0
                                            },
                                            "temp_max": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/temp_max",
                                                "type": "number",
                                                "title": "The temp_max schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": 0.0
                                            },
                                            "season_min": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/season_min",
                                                "type": "number",
                                                "title": "The season_min schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": 0.0
                                            },
                                            "season_max": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/season_max",
                                                "type": "number",
                                                "title": "The season_max schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": 0.0
                                            },
                                            "condition_name": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_name",
                                                "type": "string",
                                                "title": "The condition_name schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": ""
                                            },
                                            "condition_desc": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_desc",
                                                "type": "string",
                                                "title": "The condition_desc schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": ""
                                            },
                                            "condition_video": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_video",
                                                "type": "string",
                                                "title": "The condition_video schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": ""
                                            },
                                            "condition_icon": {
                                                "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_icon",
                                                "type": "string",
                                                "title": "The condition_icon schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": ""
                                            }
                                        },
                        
                                    }
                                ]
                            }
                        }
                    },
                    
                }
            ]
        }
    }

const validate=ajv.compile(schema)

test([{"id":"3033","name":"Pondicherry","name_ascii":"Pondicherry","lat":"11.93499371","lng":"79.83000037","population":"227411","country_id":"88","province":"Puducherry","country_name":"India","unit":"F","season":"spring","forecast":[{"date":"06\/06\/2021","temp_min":84.919999999999987494447850622236728668212890625,"temp_max":85.063999999999992951416061259806156158447265625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/07\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":85.96399999999999863575794734060764312744140625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"sun","condition_desc":"Blue skies all day long!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/sun_4623792.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/sun_16240.png"},{"date":"06\/08\/2021","temp_min":84.7399999999999948840923025272786617279052734375,"temp_max":84.830000000000012505552149377763271331787109375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/09\/2021","temp_min":84.8119999999999976125764078460633754730224609375,"temp_max":86.198000000000007503331289626657962799072265625,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/10\/2021","temp_min":84.7579999999999955662133288569748401641845703125,"temp_max":86.539999999999992041921359486877918243408203125,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/11\/2021","temp_min":85.424000000000006593836587853729724884033203125,"temp_max":85.657999999999987039700499735772609710693359375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"storm","condition_desc":"Watch out for storms!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/storm_190935.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/storm_16240.png"},{"date":"06\/12\/2021","temp_min":84.650000000000005684341886080801486968994140625,"temp_max":84.7759999999999962483343551866710186004638671875,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"cloudy","condition_desc":"Partially cloudy day","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_45449.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/cloudy_16240.png"},{"date":"06\/13\/2021","temp_min":84.650000000000005684341886080801486968994140625,"temp_max":85.099999999999994315658113919198513031005859375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/14\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":86,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/15\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":84.8840000000000003410605131648480892181396484375,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"rain","condition_desc":"Wet and rainy","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/rain_28580841.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/rain_16240.png"},{"date":"06\/16\/2021","temp_min":84.7039999999999935198502498678863048553466796875,"temp_max":84.7039999999999935198502498678863048553466796875,"season_min":84.650000000000005684341886080801486968994140625,"season_max":87.349999999999994315658113919198513031005859375,"condition_name":"sun","condition_desc":"Blue skies all day long!","condition_video":"http:\/\/explorecalifornia.org\/api\/media\/sun_4623792.mp4","condition_icon":"http:\/\/explorecalifornia.org\/api\/media\/sun_16240.png"}]}])
function test(data)
{
const valid=validate(data);
if(valid)console.log("Valid");
else console.log("Invalid:" +ajv.errorsText(validate.errors))


}
*/