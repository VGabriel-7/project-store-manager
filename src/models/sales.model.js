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

module.exports = {
  listSales,
  findSalesById,
};
