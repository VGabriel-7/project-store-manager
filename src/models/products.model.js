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

// const listSales = async () => {
//   const [sales] = await connection.execute(
//     `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity FROM
//       sales_products AS SP
//       INNER JOIN sales AS S
//       ON SP.sale_id = S.id
//       ORDER BY sale_id, product_id`,
//   );

//   return sales;
// };

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
  // listSales,
  deleteProduct,
};
