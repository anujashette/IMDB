/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// let mongoose = require("mongoose");
// let actor = require('../app/model/actor.model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let fs = require('fs');
let should = chai.use(chaiHttp);

let filePath = __dirname + data.json;
var data = fs.readFileSync(filePath);
data = JSON.parse(data);
console.log(data);

describe('api testing', () => {
    it('testing', (done) => {
        chai.request(server)
            .get('/actor')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});