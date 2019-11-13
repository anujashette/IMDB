/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let mongoose = require('mongoose');
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

describe('/GET Actor positive test', () => {

    it('It should get all actors', (done) => {
        chai.request(server)
            .get('/actor')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
                done();
            });
    });
});    

describe('/GET Actor negative test', () => {

    it('It should get actors array length not equal', (done) => {
        chai.request(server)
            .get('/actor')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.to.not.eql(0);                
                done();
            });
    });
});    


// describe('/POST Actor positive test', () => {

//     it('It should create actor', (done) => {
//         chai.request(server)
//             .post('/actor')
//             .send(data.postActor)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.be.property('message').eql('Actor created successfully');           
//                 done();
//             });
//     });
// });

describe('/POST Actor negative test', () => {

    it('It should not create already exist actor', (done) => {
        chai.request(server)
            .post('/actor')
            .send(data.postActorRepeat)
            .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.property('message').eql('Actor already exist');
                done();
            });
    });
});

describe('/PUT Actor positive test', () => {

    it('It should update actor', (done) => {
        chai.request(server)
            .put('/actor')
            .send(data.putActor)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.property('message').eql('Actor updated successfully');
                res.body.data.should.be.property('name').eql('Shahid Kapur updated');
                done();
            });
    });
});

describe('/PUT Actor negative test', () => {

    it('It should not found actor id', (done) => {
        chai.request(server)
            .put('/actor')
            .send(data.putActorRepeat)
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.property('message').eql('Actor not found to update');
                done();
            });
    });
});

describe('/DELETE Actor positive test', () => {

    it('It should delete actor', (done) => {
        chai.request(server)
            .patch('/actor')
            .send(data.patchActor)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.property('message').eql('Actor deleted successfully');
                res.body.data.should.be.property('name').eql('anuja');
                done();
            });
    });
});

describe('/DELETE Actor negative test', () => {
    it('It should not found actor id', (done) => {
        chai.request(server)
            .patch('/actor')
            .send(data.patchActorRepeat)
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.property('message').eql('Actor not found to delete');
                done();
            });
    });
});