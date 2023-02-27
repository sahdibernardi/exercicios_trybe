const chai = require('chai');

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
    it('Returns full list of chocolates', async function () {
        response = await minhaRequisicao();
        expect(response.status).to.be.equal(200);
    });
});