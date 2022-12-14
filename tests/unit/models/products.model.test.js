const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/database/connection');

const modelsProducts = require('../../../src/models/products.model');
const mockModelsDB = require('./mocks');

describe('Teste unitários da camada productsModels', () => {
  afterEach(sinon.restore);
  it('Testa se a função findAll retorna todos os produtos', async function () {
    sinon.stub(connection, "execute").resolves([mockModelsDB.mockAllDB]);

    const result = await modelsProducts.findAll();
      
    expect(result).to.deep.equal(mockModelsDB.mockAllDB);
  })

  it("Testa se a função findById retorna apenas um produto", async function () {
    sinon.stub(connection, "execute").resolves([[mockModelsDB.mockByIdDB]]);

    const resultFindByID = await modelsProducts.findById(1);
      
    expect(resultFindByID).to.deep.equal(mockModelsDB.mockByIdDB);
  });
  
  it('Testa se a função insert insere um novo produto na tabela products', async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
    
    const resultInsert = await modelsProducts.insert({
      name: 'Chinforímpula',
    });

    expect(resultInsert).to.deep.equal(mockModelsDB.mockInsert);
  });

  it('Testa se a função updateProduct edita um produto e retorna um objeto contendo o nome e o id', async function () {
    sinon.stub(connection, "execute").resolves([{ id: 1, name: 'Chimforímpula' }]);

    const result = await modelsProducts.updateProduct('Chimforímpula', 1);

    expect(result).to.deep.equal({ id: 1, name: "Chimforímpula" });
  });

  it('Testa se a função deleteProduct deleta um produto', async () => {
    sinon.stub(connection, "execute").resolves([mockModelsDB.mockDelete]);

    const result = await modelsProducts.deleteProduct(200);

    expect(result).to.deep.equal(mockModelsDB.mockDelete);
  });
});