const productsModel = require('../models/products.model');
const { idSchema } = require('./validations/schemas');

const findAll = async () => {
  const products = await productsModel.findAll();
  
  return { type: null, message: products };
};

const findById = async (productId) => {
  const { error } = idSchema.validate(productId);

  if (error) return { type: 'UNPROCESSABLE_ENTITY', message: error.message };

  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

// const insertProduct = async (name) => {
//   const { error } = nameSchema.validate(name);

//  if (error && error.message.includes('"value" is')) {
//     return { type: 'BAD_REQUEST', message: '"name" is required' };
//   } if (error && error.message.includes('"value" length must')) {
//     return {
//       type: 'UNPROCESSABLE_ENTITY',
//       message: '"name" length must be at least 5 characters long',
//     };
//   }

//   const insertedProduct = await productsModel.insert(name);

//   return { type: null, message: insertedProduct };
// };

module.exports = {
  findAll,
  findById,
  // insertProduct,
};