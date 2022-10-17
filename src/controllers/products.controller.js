const productServices = require('../services/products.service');
const { mapError } = require('../utils/errorMap');

const HTTP_STATUS_OK = 200;
const HTTP_CREATED = 201;
const HTTP_DELETED = 204;

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

const insertProduct = async (req, res) => {
  const { type, message } = await productServices.insertProduct(req.body.name);

  if (type) return res.status(mapError(type)).json({ message });

  res.status(HTTP_CREATED).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.deleteProduct(Number(id));

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(HTTP_DELETED).end();
};

module.exports = {
  listProducts,
  getProduct,
  insertProduct,
  deleteProduct,
};
