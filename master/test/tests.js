'use strict';
process.env.NODE_ENV = 'development';

var chai        = require('chai'),
    chaiHttp    = require('chai-http'),
    server      = require('./../app.js'),
    should      = chai.should();

chai.use(chaiHttp);
	
const expect = require('chai').expect;

describe('games', () => {	
	it ('request GET /games?page=0&size=2', function(done){
		chai.request(server)
		.get('/games?page=0&size=2')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
		res.body.count.should.be.equal(4);
		res.body.rows.length.should.be.equal(2);
		done();
		});
  });

	it ('request GET /games/3', function(done){
		chai.request(server)
		.get('/games/3')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.id.should.be.equal(3);
		done();
		});
  });

  it ('request GET /games/6', function(done){
		chai.request(server)
		.get('/games/6')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.a('object');
		done();
		});
  });
});

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

  it ('request PUT /clients/3?perf=5&game=3', function(done){
		chai.request(server)
		.put('/clients/3?perf=5&game=3')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.equal(1);
		done();
		});
	});
	
	it ('request PATCH /clients/3', function(done){
		chai.request(server)
		.patch('/clients/3')
		.end(function(err, res) {
		res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.result.should.be.equal(1);
		done();
		});
  });
});
