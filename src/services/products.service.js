const productsModel = require('../models/products.model');
const { idSchema } = require('./validations/schemas');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { type: null, message: products };
};

const findById = async (productId) => {
  const { error } = idSchema.validate(productId);

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};