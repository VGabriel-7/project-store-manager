const productServices = require('../services/products.service');
const { mapError } = require('../utils/errorMap');

const HTTP_STATUS_OK = 200;

const listProducts = async (_req, res) => {
  const { type, message } = await productServices.findAll();
  
  if (type) return res.status(mapError(type)).json({ message });

  res.status(HTTP_STATUS_OK).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.findById(Number(id));

  if (type) return res.status(mapError(type)).json({ message });

  res.status(HTTP_STATUS_OK).json(message);
};

module.exports = {
  listProducts,
  getProduct,
};
