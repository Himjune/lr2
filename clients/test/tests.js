'use strict';
process.env.NODE_ENV = 'development';

var chai        = require('chai'),
    chaiHttp    = require('chai-http'),
    server      = require('./../app.js'),
    should      = chai.should();

chai.use(chaiHttp);
	
const expect = require('chai').expect;

describe('clients', () => {	
	it ('request GET /clients/3', function(done){
		chai.request(server)
		.get('/clients/3')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.id.should.be.equal(3);
		done();
		});
  });

  it ('request GET /clients/13', function(done){
		chai.request(server)
		.get('/clients/13')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.a('object');
		done();
		});
  });

  it ('request PATCH /clients/3?server=0&game=0', function(done){
		chai.request(server)
		.patch('/clients/3?server=0&game=0')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.equal(1);
		done();
		});
  });
});