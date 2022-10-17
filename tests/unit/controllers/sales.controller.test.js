const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const salesController = require("../../../src/controllers/sales.controller");
const salesServices = require('../../../src/services/sales.service');

const { expect } = chai;

chai.use(sinonChai);

describe("Testa a camada salesController", () => {
  it("Testa a função listSales", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesServices, "listSales")
      .resolves({ type: null, message: [] });

    await salesController.listSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([]);
  });

  it("Testa a função findSalesById", async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesServices, "findSalesById")
      .resolves({ type: null, message: [] });

    await salesController.findSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([]);
  });
});
