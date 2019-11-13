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

// describe('/GET Movies positive test', () => {

//     it('It should get all movies', (done) => {
//         chai.request(server)
//             .get('/movie')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.data.should.be.a('array');
//                 done();
//             });
//     });
// });    

// describe('/GET Movie negative test', () => {

//     it('It should get movies array length not equal', (done) => {
//         chai.request(server)
//             .get('/movie')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.data.length.should.to.not.eql(0);                
//                 done();
//             });
//     });
// });    

// describe('/POST Movie positive test', () => {

//     it('It should create movie', (done) => {
//         chai.request(server)
//             .post('/movie')
//             .field(data.postMovie)
//             .attach('profile',__dirname+'/profile-1573280273150.png')
//             .end((err, res) => {
//                 console.log(res.body);

//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.be.property('message').eql('Movie created successfully');           
//                 done();
//             });
//     });
// });

// describe('/POST Movie negative test', () => {

//     it('It should not create already exist movie', (done) => {
//         chai.request(server)
//             .post('/movie')
//             .field(data.postMovieRepeat)
//             .attach('profile',__dirname+'/profile-1573280273150.png')
//             .end((err, res) => {
//                 console.log(res.body);
                
//                 res.should.have.status(409);
//                 res.body.should.be.property('message').eql('Movie already exist');
//                 done();
//             });
//     });
// });

// describe('/POST Movie input negative test', () => {

//     it('It should validate inputs', (done) => {
//         chai.request(server)
//             .post('/movie')
//             .field(data.postMovieInput)
//             .end((err, res) => {
//                 res.should.have.status(400);                
//                 res.body.should.be.property('Error: ');
//                 done();
//             });
//     });
// });

// describe('/PUT Movie positive test', () => {

//     it('It should update movie', (done) => {
//         chai.request(server)
//             .put('/movie')
//             .field(data.putMovie)
//             .attach('profile',__dirname+'/profile-1573280273150.png')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.property('message').eql('Movie updated successfully');
//                 res.body.data.should.be.property('name').eql('ABCD updated');
//                 done();
//             });
//     });
// });

// describe('/PUT Movie negative test', () => {

//     it('It should not found movie id', (done) => {
//         chai.request(server)
//             .put('/movie')
//             .field(data.putMovieRepeat)
//             .attach('profile',__dirname+'/profile-1573280273150.png')
//             .end((err, res) => {
//                 res.should.have.status(403);
//                 res.body.should.be.property('message').eql('Movie not found to update');
//                 done();
//             });
//     });
// });

// describe('/POST Movie input negative test', () => {

//     it('It should validate inputs', (done) => {
//         chai.request(server)
//             .put('/movie')
//             .field(data.postMovieInput)
//             .end((err, res) => {
//                 res.should.have.status(400);                
//                 res.body.should.be.property('Error: ');
//                 done();
//             });
//     });
// });

describe('/DELETE Movie positive test', () => {

    it('It should delete movie', (done) => {
        chai.request(server)
            .patch('/movie')
            .send(data.patchMovie)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.property('message').eql('Movie deleted successfully');
                res.body.data.should.be.property('name').eql('Housefull 3');
                done();
            });
    });
});

describe('/DELETE Movie negative test', () => {
    it('It should not found movie id', (done) => {
        chai.request(server)
            .patch('/movie')
            .send(data.patchMovieRepeat)
            .end((err, res) => {
                console.log(res);
                
                res.should.have.status(403);
                res.body.should.be.property('message').eql('Movie not found to delete');
                done();
            });
    });
});