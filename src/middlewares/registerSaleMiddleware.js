const { findById } = require('../services/products.service');

const validProducts = (req, res, next) => {
  const validProductId = req.body.some(({ productId }) => productId === undefined);

  if (validProductId) return res.status(400).json({ message: '"productId" is required' });

  const validQuantity = req.body.some(({ quantity }) => quantity === undefined);

  if (validQuantity) return res.status(400).json({ message: '"quantity" is required' });

  const validGreaterThanZero = req.body.some(({ quantity }) => quantity === 0 || quantity < 0);

  if (validGreaterThanZero) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' }); 
  }

  next();
};

const validNotFound = async (req, res, next) => {
  const promise = req.body.map(async ({ productId }) => {
    const a = await findById(Number(productId));

    if (a.type === 'NOT_FOUND') {
      return true;
    }
    return false;
  });

  const validProductId = await Promise.all(promise);
  
  if (validProductId.some((a) => a)) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = {
  validProducts,
  validNotFound,
};