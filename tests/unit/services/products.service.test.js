const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/database/connection');

const serviceProducts = require('../../../src/services/products.service');
const modelProducts = require('../../../src/models/products.model');

const mockService = require('./mocks');

describe('Teste unitários da camada Service', () => {
  afterEach(sinon.restore);
  it('Testa se a função findAll da camada service retorna todos os produtos', async () => {
    sinon.stub(modelProducts, "findAll").resolves(mockService.mockFindAll);

    const { message } = await serviceProducts.findAll();
    
    expect(message).to.deep.equal(mockService.mockFindAll);
  })

  it("Testa se a função findById da camada service retorna apenas um produto", async function () {
    sinon.stub(modelProducts, "findById").resolves(mockService.mockFindById);

    const { message } = await serviceProducts.findById(1);

    expect(message).to.deep.equal(mockService.mockFindById);
  });

  it('Testa se a função findById retorna a messagem referente o erro ao passar o id inválido', async function () {
    sinon.stub(modelProducts, "findById").resolves(mockService.mockFindByIdError);

    const result = await serviceProducts.findById("Xaolin Matador de Proco");
    
    expect(result).to.deep.equal(mockService.mockFindByIdError);
  });

  it('Testa se a função findById retorna a messagem de "Product not found" ao passar um id inexistente', async function () {
    sinon.stub(modelProducts, "findById").resolves(mockService.mockFindByIdNotFound);

    const { message } = await serviceProducts.findById(999);
 
    expect(message).to.deep.equal(mockService.mockFindByIdNotFound);
  });

  it('Testa se a função insertProduct insere um produto e retorna o produto com um id', async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
    sinon.stub(modelProducts, "insert").resolves(mockService.mockInsert);
    
    const { message } = await serviceProducts.insertProduct('Chimforímpula');
    
    expect(message).to.deep.equal(mockService.mockInsert);
  });

  it('Testa se a função deleteProduct deleta um produto', async () => {
    sinon
      .stub(modelProducts, "deleteProduct")
      .resolves(mockService.mockDeleteProduct.message);

    const result = await serviceProducts.deleteProduct(2);
    expect(result).to.deep.equal(mockService.mockDeleteProduct);
  });

  it('Testa se ao passar um id que não existe é retornado uma messagem de product not found', async () => {
    sinon
      .stub(modelProducts, "deleteProduct")
      .resolves(mockService.mockFindByIdNotFound);

    const result = await serviceProducts.deleteProduct(999);

    expect(result).to.deep.equal(mockService.mockFindByIdNotFound);
  });
})
