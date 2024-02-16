const Joi = require('joi');

const pageValidation = Joi.object({
    pagename: Joi.string().required(),
    bannercontent: Joi.string().required(),
    contectNumber: Joi.string().required(),
    contentTitle: Joi.string().required(),
    bannar: Joi.array().items(Joi.object({
        project: Joi.string().required(),
        established: Joi.string().required(),
        regions: Joi.string().required(),
        image: Joi.string().allow('', null)
    })),
    projects:Joi.array().items(Joi.object({
        title: Joi.string().required(),
        description:Joi.string().required()
    }))
  });

module.exports = {
    pageValidation
}