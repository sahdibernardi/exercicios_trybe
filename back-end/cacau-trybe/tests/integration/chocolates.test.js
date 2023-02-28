/* eslint-disable key-spacing */
/* eslint-disable prefer-arrow-callback */
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

describe('Test get method in /chocolates/brand/:brandid endpoint', function () {
    it('Returns the correspondent brand', async function () {
        const output = [
            // eslint-disable-next-line object-curly-spacing
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

describe('test inexisting scenarios', function () {
    it('in /chocolates/:id, search for inexisting id and returns 404', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'This ID do not match a chocolate :( please try another one' })
    });

    it('in /chocolates/brand/:brandid, search for inexisting id and returns 404', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/brand/36');
  
        expect(response.status).to.be.equal(404);
        expect(response.body.message).to.deep.equal('This ID do not match any brand :( please try another one')
      });
  });