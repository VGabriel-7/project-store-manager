const router = require('express').Router();
const {
  listProducts,
  getProduct,
  insertProduct,
  deleteProduct,
} = require('../controllers/products.controller');

router.get('/', listProducts);

router.get('/:id', getProduct);

router.post('/', insertProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
