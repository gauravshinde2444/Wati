const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('./app');


chai.use(chaihttp);

const expect = chai.expect;

describe('/add' , () =>{

    it('should return sum', (done) =>{

        chai.request(app).post('/add').send({
            "num1" : 5,
            "num2" : 55
        }).end((err,res) => {

            expect(res.body).to.have.property('sum').to.equal(60);
            done();
        })

    });
});