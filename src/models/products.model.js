const connection = require('./database/connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const findById = async (idProducts) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [idProducts],
  );

  return result;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  
  const result = { id: insertId, name };

  return result;
};

const deleteProduct = async (productId) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [productId],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteProduct,
};
