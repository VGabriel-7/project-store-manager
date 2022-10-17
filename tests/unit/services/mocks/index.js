const mockFindAll = {
  type: null,
  message: [
    { id: 1, name: "Martelo de Thor" },
    { id: 2, name: "Traje de encolhimento" },
  ],
};

const mockFindById = { type: null, message: { id: 1, name: 'Martelo de Thor' } }

const mockFindByIdError = {
  type: "UNPROCESSABLE_ENTITY",
  message: '"value" must be a number',
};

const mockFindByIdNotFound = {
  type: 'NOT_FOUND',
  message: 'Product not found',
}

const mockInsert = {
  id: 4,
  name: "Chimforímpula",
};

const mockListSales = [
  {
    sale_id: 1,
    date: '2022-10-17T16:32:47.000Z',
    product_id: 1,
  quantity: 5 
  },
  {
    sale_id: 1,
    date: '2022-10-17T16:32:47.000Z',
    product_id: 2,
    quantity: 10 },
  {
    sale_id: 2,
    date: '2022-10-17T16:32:47.000Z',
    product_id: 3,
    quantity: 15
  }]

const mockSalesById = [
  {
    date: "2022-10-17T16:32:47.000Z",
    product_id: 1,
    quantity: 5,
  },
  {
    date: "2022-10-17T16:32:47.000Z",
    product_id: 2,
    quantity: 10,
  },
  {
    date: "2022-10-17T16:32:47.000Z",
    product_id: 3,
    quantity: 15,
  },
];

const mockDeleteProduct = {
  type: null,
  message: {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: "",
    serverStatus: 2,
    warningStatus: 0,
  },
}

module.exports = {
  mockFindAll,
  mockFindById,
  mockFindByIdError,
  mockFindByIdNotFound,
  mockInsert,
  mockListSales,
  mockSalesById,
  mockDeleteProduct,
};
