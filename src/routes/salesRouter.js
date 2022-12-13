const router = require('express').Router();
const {
  listSales,
  findSalesById,
  registerSales,
  deleteSalesById } = require('../controllers/sales.controller');
const { validProducts, validNotFound } = require('../middlewares/registerSaleMiddleware');

router.get('/', listSales);

router.get('/:id', findSalesById);

router.delete('/:id', deleteSalesById);

router.post('/', validProducts, validNotFound, registerSales);

module.exports = router;
