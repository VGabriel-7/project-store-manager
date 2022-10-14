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
    sale_id: 1,
    date: '2022-10-14T20:42:27.000Z',
    product_id: 1,
    quantity: 5 },
  {
    sale_id: 1,
    date: '2022-10-14T20:42:27.000Z',
    product_id: 2,
    quantity: 10 },
  {
    sale_id: 2,
    date: '2022-10-14T20:42:27.000Z',
    product_id: 3,
    quantity: 15 } ]

module.exports = {
  mockAllDB,
  mockByIdDB,
  mockInsert,
  mockListSales,
};