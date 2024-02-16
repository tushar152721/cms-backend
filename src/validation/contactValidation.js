const Joi = require('joi');

const contactValidation = Joi.object({ 
    page: Joi.string().allow('', null),
    email: Joi.string().required(),
    mobileNo: Joi.string().required(),
    address: Joi.array().items(Joi.object({
        officeName: Joi.string().required(),
        officeAddress: Joi.string().required(),
    })),   
 });

 module.exports = {
    contactValidation
 }