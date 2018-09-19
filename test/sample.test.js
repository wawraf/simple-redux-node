const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const portfinder = require('portfinder')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})
chai.use(chaiHttp);

describe('/// SAMPLE TEST///', function () {
  
  before(async () => {
    process.env.PORT = await portfinder.getPortPromise({port: 10002})
    const app = require('../server');
  });

  after(async () => {
    require('../server').stop;
  });
  
  // Sample test
  it('Poll from mongoose is an object', function(){
      expect({someText: 'hello'}).to.be.an('object', 'This is an object')
    })
  
  /* General test */
  describe('Server working', function(){
    it('Server is working', function(done){
      chai.request(require('../server'))
      .get('/hello')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.info, 'hello')
        done()
      })
    })
  })
    
})

