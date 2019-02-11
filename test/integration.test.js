require('dotenv').config();
const app = require('../bin/www');
const mongoose = require('mongoose');
// const expect = require('chai').expect;
const expect = require('expect');
const request = require('supertest');
const authenticatedUser = request.agent(app);




// TESTS
// First, confirm GET to dashboard works (this must pass before POST)
describe('Routing', () => {

    // setup authenticated user for testing authenticated routes
    before((done) => {
        authenticatedUser
            .post('/users/login')
            .send({
                email: process.env.ADMIN_EMAIL,
                password: process.env.ADMIN_PASSWORD
            })
            .end((err, response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    after((done) => {
        const server = app.listen(8080, () => {
            server.close(() => mongoose.connection.close(done));
        });

    });

    context('GET request to "/dashboard"', () => {
        it('returns a 200 response', () => {
            authenticatedUser.get('/dashboard').then(response => {

                expect(response.statusCode).toBe(200);
                // done();
            }).catch(err => err.message)
        });
    });

    // context('POST request to "/expression-of-interest"', () => {
    //     it('returns a 201 response', (done) => {
    //         const { expressionOfInterest } = require('./testData');
    //         request(app)
    //             .post('/expression-of-interest')
    //             .set('Content-Type', 'application/json')
    //             .send(expressionOfInterest)
    //             .end((err, response) => {
    //                 expect(response.statusCode).toBe(201);
    //                 done();
    //             });
    //     });
    // });
});