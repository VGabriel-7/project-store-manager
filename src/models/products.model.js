const connection = require('./database/connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (idProducts) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [idProducts],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
};
