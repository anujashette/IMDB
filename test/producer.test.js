/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let mongoose = require('mongoose');
// let Users = require('../app/model/user.model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
let fs = require('fs');
path = require('path'),  

filePath = path.join(`${__dirname}/data.json`);
var data = fs.readFileSync(filePath);
data = JSON.parse(data);

describe('/GET Producer positive test', () => {

    it('It should get all producers', (done) => {
        chai.request(server)
            .get('/producer')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
                done();
            });
    });
});    

describe('/GET Producer negative test', () => {

    it('It should get producers array length not equal', (done) => {
        chai.request(server)
            .get('/producer')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.to.not.eql(0);                
                done();
            });
    });
});    

describe('/POST Producer positive test', () => {

    it('It should create producer', (done) => {
        chai.request(server)
            .post('/producer')
            .send(data.postProducer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.property('message').eql('Producer created successfully');           
                done();
            });
    });
});

describe('/POST Producer negative test', () => {

    it('It should not create already exist producer', (done) => {
        chai.request(server)
            .post('/producer')
            .send(data.postProducerRepeat)
            .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.property('message').eql('Producer already exist');
                done();
            });
    });
});

describe('/PUT Producer positive test', () => {

    it('It should update producer', (done) => {
        chai.request(server)
            .put('/producer')
            .send(data.putProducer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.property('message').eql('Producer updated successfully');
                res.body.data.should.be.property('name').eql('Farha Khan updated');
                done();
            });
    });
});

describe('/PUT Producer negative test', () => {

    it('It should not found producer id', (done) => {
        chai.request(server)
            .put('/producer')
            .send(data.putProducerRepeat)
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.property('message').eql('Producer not found to update');
                done();
            });
    });
});

describe('/DELETE Producer positive test', () => {

    it('It should delete producer', (done) => {
        chai.request(server)
            .patch('/producer')
            .send(data.patchProducer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.property('message').eql('Producer deleted successfully');
                res.body.data.should.be.property('name').eql('Farha Khanr');
                done();
            });
    });
});

describe('/DELETE Producer negative test', () => {
    it('It should not found producer id', (done) => {
        chai.request(server)
            .patch('/producer')
            .send(data.patchProducerRepeat)
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.property('message').eql('Producer not found to delete');
                done();
            });
    });
});