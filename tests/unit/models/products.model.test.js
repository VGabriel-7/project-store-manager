const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/database/connection');

const modelsProducts = require('../../../src/models/products.model');
const mockModelsDB = require('./mocks');

describe.only('Teste unitários da camada Models', () => {
  describe('Funções do procuts', () => {
    afterEach(sinon.restore);
    it('Testa se a função findAll retorna todos os produtos', async () => {
      sinon.stub(connection, "execute").resolves(mockModelsDB.mockAllDB);

      const result = await modelsProducts.findAll();

      expect(result).to.deep.equal(mockModelsDB.mockAllDB);
    })

    it("Testa se a função findById retorna apenas um produto", async () => {
      sinon.stub(connection, "execute").resolves(mockModelsDB.mockByIdDB);

      const resultFindByID = await modelsProducts.findById(1);

      expect(resultFindByID).to.deep.equal(mockModelsDB.mockByIdDB);
    });
  });
});