const { nameAndIdShema } = require('../services/validations/schemas');

const validateNameAndId = (req, res, next) => {
  const { name } = req.body;
  const { id } = req.res;
  
  const { error } = nameAndIdShema.validate({ name, id });

  switch (error.message) {
    case '"name" is required':
      return res.status(400).json({ message: '"name" is required' });
    default:
      return next();
  }
};

module.exports = {
  validateNameAndId,
};
