'use strict';
process.env.NODE_ENV = 'development';

var chai        = require('chai'),
    chaiHttp    = require('chai-http'),
    server      = require('./../app.js'),
    should      = chai.should();

chai.use(chaiHttp);
	
const expect = require('chai').expect;

describe('servers', () => {	
	it ('request GET /servers?game=3&perf=5', function(done){
		chai.request(server)
		.get('/servers?game=3&perf=5')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.id.should.be.equal(4);
		done();
		});
  });

  it ('request GET /servers?game=3&perf=11', function(done){
		chai.request(server)
		.get('/servers?game=3&perf=11')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.a('object');
		done();
		});
  });

  it ('request PATCH /servers/4', function(done){
		chai.request(server)
		.patch('/servers/4')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.equal(1);
		done();
		});
  });
});