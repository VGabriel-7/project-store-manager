const mockAllDB = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  /* ... */
];

const mockByIdDB = {
  id: 1,
  name: "Martelo de Thor",
};

const mockInsert = {
  id: 3,
  name: { name: 'Chinforímpula' },
};

const mockListSales = [ {
    saleId: 1,
    date: '2022-10-14T20:42:27.000Z',
    productId: 1,
    quantity: 5 },
  {
    saleId: 1,
    date: '2022-10-14T20:42:27.000Z',
    productId: 2,
    quantity: 10 },
  {
    saleId: 2,
    date: '2022-10-14T20:42:27.000Z',
    productId: 3,
    quantity: 15
  }]
    
const mockSalesById = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },

  /* ... */
];

const mockDelete = {
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  info: "",
  serverStatus: 2,
  warningStatus: 0,
};

module.exports = {
  mockAllDB,
  mockByIdDB,
  mockInsert,
  mockListSales,
  mockDelete,
  mockSalesById,
};