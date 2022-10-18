const { expect } = require("chai");
const sinon = require("sinon");

const salesServices = require("../../../src/services/sales.service");
const salesModels = require("../../../src/models/sales.model");

const mockService = require("./mocks");

describe("Testa a camada salesServices", function () {
  it("Testa se a função listSales retorna todas as vendas", async () => {
    sinon.stub(salesModels, "listSales").resolves(mockService.mockListSales);

    const { message } = await salesServices.listSales();

    expect(message).to.deep.equal(mockService.mockListSales);
  });

  it("Testa se a função findSaleById da camada service retorna apenas um produto", async function () {
    sinon
      .stub(salesModels, "findSalesById")
      .resolves(mockService.mockSalesById);

    const { message } = await salesServices.findSalesById(1);

    expect(message).to.deep.equal(mockService.mockSalesById);
  });

  it("Testa se a função registerSales da camada service registra um produto e retorna um objeto com as infos", async function () {
    sinon
      .stub(salesModels, "registerSales")
      .resolves(mockService.returnRegister);

    const { message } = await salesServices.registerSales(
      mockService.returnRegister.itemsSold
    );

    expect(message).to.deep.equal(mockService.returnRegister);
  });
});
