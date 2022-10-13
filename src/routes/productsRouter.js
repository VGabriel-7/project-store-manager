const router = require('express').Router();
const { listProducts, getProduct, insertProduct } = require('../controllers/products.controller');

router.get('/', listProducts);

router.get('/:id', getProduct);

router.post('/', insertProduct);

module.exports = router;
