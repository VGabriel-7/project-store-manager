const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/database/connection");

const salesModels = require("../../../src/models/sales.model");
const mockModelsDB = require("./mocks");

describe("Testa a camada salesModel", () => {
  afterEach(sinon.restore);
  it("Testa se a função listSales retorna todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([mockModelsDB.mockListSales]);

    const result = await salesModels.listSales();

    expect(result).to.deep.equal(mockModelsDB.mockListSales);
  });

  it('Testa se a função findSalesById retorna uma lista de vendas referentes ao salesId', async () => {
    sinon.stub(connection, "execute").resolves([mockModelsDB.mockSalesById]);

    const result = await salesModels.findSalesById(1);

    expect(result).to.deep.equal(mockModelsDB.mockSalesById);
  });

    it(`Testa se a função registerSales da camada model registra vendas e retorna
      um objeto contendo o id da venda e todos as vendas`, async function () {
      const returnRegister = {
        id: 3,
        itemsSold: [
          {
            productId: 1,
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 5,
          },
        ],
      };
      sinon
        .stub(connection, "execute")
        .onFirstCall()
        .resolves([{ insertId: 3 }])
        .onSecondCall().resolves();

      const result = await salesModels.registerSales(returnRegister.itemsSold);

      expect(result).to.deep.equal(returnRegister);
    });
});
