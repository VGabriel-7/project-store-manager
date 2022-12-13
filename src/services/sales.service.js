const salesModel = require('../models/sales.model');
const productService = require('./products.service');

const listSales = async () => {
  const sales = await salesModel.listSales();

  return { type: null, message: sales };
};

const findSalesById = async (salesId) => {
  const { type } = await productService.findById(salesId);

  if (type === 'NOT_FOUND') return { type: 'NOT_FOUND', message: 'Sale not found' };

  const product = await salesModel.findSalesById(salesId);
  if (product.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  if (product) return { type: null, message: product };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

const findSalesProductsById = async (salesId) => {
  const product = await salesModel.findSalesProductsById(salesId);
  if (product.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: product };
};

const deleteSalesById = async (salesId) => {
  const product = await salesModel.deleteSalesById(salesId);
  if (product) return { type: null, message: product };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

const registerSales = async (body) => {
  const restul = await salesModel.registerSales(body);
  return { type: null, message: restul };
};

module.exports = {
  listSales,
  findSalesById,
  registerSales,
  deleteSalesById,
  findSalesProductsById,
};
