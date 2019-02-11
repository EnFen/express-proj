require('dotenv').config();
const app = require('../../bin/www');
const request = require('supertest');
const authenticatedUser = request.agent(app);

// setup authenticated user for testing authenticated routes
beforeEach((done) => {
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


// TESTS
test('GET to /dashboard returns a 200 response', async () => {
    const response = await authenticatedUser.get('/dashboard');
    expect(response.status).toBe(200);
});