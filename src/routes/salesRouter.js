const router = require('express').Router();
const { listSales, findSalesById, registerSales } = require('../controllers/sales.controller');
const { validProducts, validNotFound } = require('../middlewares/registerSaleMiddleware');

router.get('/', listSales);

router.get('/:id', findSalesById);

router.post('/', validProducts, validNotFound, registerSales);

module.exports = router;
