const salesServices = require('../services/sales.service');
const { mapError } = require('../utils/errorMap');

const HTTP_STATUS_OK = 200;
const HTTP_CREATED = 201;

const listSales = async (_req, res) => {
  const { type, message } = await salesServices.listSales();

  if (type) return res.status(mapError(type)).json({ message });

  res.status(HTTP_STATUS_OK).json(message);
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.findSalesById(Number(id));

  if (type) return res.status(mapError(type)).json({ message });

  res.status(HTTP_STATUS_OK).json(message);
};

const registerSales = async (req, res) => {
  const { message } = await salesServices.registerSales(req.body);

  return res.status(HTTP_CREATED).json(message);
};

module.exports = {
  listSales,
  findSalesById,
  registerSales,
};
