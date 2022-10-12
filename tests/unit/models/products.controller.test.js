const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');

describe('Teste da camada Controller', () => {
  describe('', () => {
    it('', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'findAll').resolves({ type: null, message: [] });

      await productsController.listProducts(req, res);

      expect(res.status).to.have.been.caledWith(200);
      expect(res.json).to.have.been.caledWith([]);
    });

    it('', async function () {
      const res = {};
      const req = { body: { params: { id: 1 } } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'findById').resolves({ type: null, message: { id: 1, name: 'xaolin' } });

      await productsController.getProduct(req, res);

      expect(res.status).to.have.been.caledWith(200);
      expect(res.json).to.have.been.caledWith({ id: 1, name: 'xaolin' });
    });
  });
})