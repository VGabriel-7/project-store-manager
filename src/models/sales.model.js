const camelize = require('camelize');
const connection = require('./database/connection');

const listSales = async () => {
  const [sales] = await connection.execute(
    `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity FROM
      sales_products AS SP
      INNER JOIN sales AS S
      ON SP.sale_id = S.id
      ORDER BY sale_id, product_id`,
  );

  return camelize(sales);
};

const registerSales = async (body) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales () VALUES ()',
  );

  await body.forEach(({ productId, quantity }) =>
    connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, productId, quantity],
    ));

  return {
    id: insertId,
    itemsSold: body,
  };
};

const findSalesById = async (salesId) => {
  const [sales] = await connection.execute(
    `SELECT S.date, SP.product_id, SP.quantity FROM
    sales_products AS SP
    INNER JOIN sales AS S
    ON S.id = SP.sale_id
    WHERE SP.sale_id = ?
    ORDER BY SP.sale_id, SP.product_id`,
    [salesId],
  );

  return camelize(sales);
};

const findSalesProductsById = async (salesId) => {
  const [salesProducts] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [salesId],
  );

  return camelize(salesProducts);
};

const deleteSalesById = async (salesId) => {
  const [sales] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [salesId],
  );

  return sales;
};

const updateSales = async ({ productId, quantity }, salesId) => {
  const [sales] = await connection.execute(
    `UPDATE StoreManager.sales_products
    SET
      product_id = ?
      quantity = ?
    WHERE
      sale_id = ?`,
    [productId, quantity, salesId],
  );

  return sales;
};

module.exports = {
  listSales,
  findSalesById,
  registerSales,
  deleteSalesById,
  findSalesProductsById,
  updateSales,
};
