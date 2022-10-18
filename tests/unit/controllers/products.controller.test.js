const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');

const { expect } = chai;

chai.use(sinonChai);

describe('Teste da camada productsController', () => {
  it('Testa a função listProducts', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findAll').resolves({ type: null, message: [] });

    await productsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([]);
  });

  it('Testa a função getProduct', async function () {
    const res = {};
    const req = { params: { name: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findById').resolves({ type: null, message: { id: 1, name: 'xaolin' } });

    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ id: 1, name: 'xaolin' });
  });

  it("Testa a função getProduct", async function () {
    const res = {};
    const req = { body: { name: "Chimforímpula" } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "insertProduct")
      .resolves({ type: null, message: { id: 4, name: "Chimforímpula" } });

    await productsController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 4, name: "Chimforímpula" });
  });

  it("Testa a função updateProduct", async function () {
    const res = {};
    const req = { params: { id: 3 }, body: { name: 'Xaolin' } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "updateProduct")
      .resolves({ type: null, message: {} });

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({});
  });

  it("Testa a função deleteProduct", async function () {
    const res = {};
    const req = { params: { id: 3 } };

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
    sinon
      .stub(productsService, "deleteProduct")
      .resolves({ type: null, message: {} });

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.end).to.have.been.calledWith();
  });
})