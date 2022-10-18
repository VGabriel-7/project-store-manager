const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.string().min(5).required();

const nameAndIdShema = Joi.object({
  name: nameSchema,
  id: idSchema,
});

module.exports = {
  idSchema,
  nameSchema,
  nameAndIdShema,
};
