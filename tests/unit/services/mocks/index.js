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

module.exports = {
  mockFindAll,
  mockFindById,
  mockFindByIdError,
  mockFindByIdNotFound,
  mockInsert,
};
