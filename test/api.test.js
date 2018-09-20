const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')

const portfinder = require('portfinder')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})
chai.use(chaiHttp);

describe('/// API ROUTING TEST ///', function () {
  
  before(async () => {
    process.env.PORT = await portfinder.getPortPromise({port: 10002})
    const app = require('../server');
  });

  after(async () => {
    require('../server').stop;
  });
  
  /* GET requests */ 
  describe('1. GET requests', function(){
    
    let aID
    it('GET all articles', function(done){
      chai.request(require('../server'))
      .get('/articles')
      .end((err, res) => {
        aID = res.body[0]._id
        
        assert.equal(res.status, 200)
        expect(res.body).to.be.an('array')
        done()
      })
    })
    
    it('GET one article', function(done){
      chai.request(require('../server'))
      .get('/articles/' + aID)
      .end((err, res) => {
        assert.equal(res.status, 200)
        expect(res.body).to.be.an('object')
        done()
      })
    })
    
    it('GET one article that doesn`t exist', function(done){
      chai.request(require('../server'))
      .get('/articles/notexpected')
      .end((err, res) => {
        assert.equal(res.status, 500)
        done()
      })
    })
  })
    
})

