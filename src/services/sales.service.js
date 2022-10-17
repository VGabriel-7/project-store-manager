const salesModel = require('../models/sales.model');
const productService = require('./products.service');
const { idSchema } = require('./validations/schemas');

const listSales = async () => {
  const sales = await salesModel.listSales();

  return { type: null, message: sales };
};

const findSalesById = async (salesId) => {
  const { type } = await productService.findById(salesId);

  if (type === 'NOT_FOUND') return { type: 'NOT_FOUND', message: 'Sale not found' };

  const product = await salesModel.findSalesById(salesId);
  if (product) return { type: null, message: product };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  listSales,
  findSalesById,
};
