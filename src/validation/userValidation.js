const Joi = require('joi');

const userValidation = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = {
    userValidation
}