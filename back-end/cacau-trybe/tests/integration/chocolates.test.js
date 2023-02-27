const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Test get method in /chocolates endpoint', function () {
    it('Returns full list of chocolates', async function () {
        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
          ];
    
          const response = await chai
            .request(app)
            .get('/chocolates');
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolates).to.deep.equal(output);
    });
});

describe('Test get method in /chocolates/brand/:id endpoint', function () {
    it('Returns the correspondent brand', async function () {
        const output = [
            {id:1, name: 'Mint Intense', brandId:1},
            {id:2, name: 'White Coconut', brandId:1},
        ];

          const response = await chai
            .request(app)
            .get('/chocolates/brand/1');
          expect(response.status).to.be.equal(200);
          expect(response.body.brands).to.deep.equal(output);
    });
});

describe('Test get method in /chocolates/:id endpoint', function () {
    it('Returns the correspondent chocolate', async function () {
        const output = {
            "id":3,"name":"Mon Chéri","brandId":2
        };

          const response = await chai
            .request(app)
            .get('/chocolates/3');
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolate).to.deep.equal(output);
    });
});