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

const listSales = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM sales_products',
  );

  return sales;
};

module.exports = {
  findAll,
  findById,
  insert,
  listSales,
};
