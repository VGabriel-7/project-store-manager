const router = require('express').Router();
const { listSales, findSalesById } = require('../controllers/sales.controller');

router.get('/', listSales);

router.get('/:id', findSalesById);

module.exports = router;
