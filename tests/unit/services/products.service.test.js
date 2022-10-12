const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/database/connection');

const serviceProducts = require('../../../src/services/products.service');

const mockService = require('./mocks');

describe('Teste unitários da camada Service', () => {
  afterEach(sinon.restore);
  it('Testa se a função findAll da camada service retorna todos os produtos', async () => {
    sinon.stub(connection, "execute").resolves(mockService.mockFindAll);

    const result = await serviceProducts.findAll();

    expect(result).to.deep.equal(mockService.mockFindAll);
  })

  it("Testa se a função findById da camada service retorna apenas um produto", async function () {
    sinon.stub(connection, "execute").resolves(mockService.mockFindById);

    const result = await serviceProducts.findById(1);

    expect(result).to.be.equal(mockService.mockFindById);
  });

  it('Testa se a função findById retorna a messagem referente o erro ao passar o id inválido', async function () {
    sinon.stub(connection, "execute").resolves(mockService.mockFindByIdError);

    const result = await serviceProducts.findById('Xaolin Matador de Proco');

    expect(result).to.deep.equal(mockService.mockFindByIdError);
  });

  it('Testa se a função findById retorna a messagem de "Product not found" ao passar um id inexistente', async function () {
    sinon.stub(serviceProducts, "findById").resolves(mockService.mockFindByIdNotFound);

    const result = await serviceProducts.findById(999);

    expect(result).to.deep.equal(mockService.mockFindByIdNotFound);
  });
});
