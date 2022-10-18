const router = require('express').Router();
const {
  listProducts,
  getProduct,
  insertProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products.controller');
const { validateNameAndId } = require('../middlewares/updateProductMiddleware');

router.get('/', listProducts);

router.post('/', insertProduct);

router.get('/:id', getProduct);

router.put('/:id', validateNameAndId, updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
