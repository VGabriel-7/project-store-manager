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

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  
  const result = { id: insertId, name };

  return result;
};

const updateProduct = async (name, id) => {
  await connection.execute(
    `UPDATE products
    SET name = ?
    WHERE id = ?`,
    [name, id],
  );

  return { id, name };
};

updateProduct('test', 2);

const deleteProduct = async (productId) => {
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [productId],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteProduct,
  updateProduct,
};
