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
  mockDeleteProduct,
};
