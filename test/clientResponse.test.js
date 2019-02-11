const assert = require('assert');
const sinon = require('sinon');

describe('Response to client', () => {

    const clientResponse = require('../middleware/res/clientResponse');
    let req;
    let res;
    let next;

    beforeEach('Set up middleware objects', () => {
        req = {};
        res = {
            status: sinon.spy(status => status),
            send: sinon.spy(message => message)
        };
        next = sinon.spy()
    });

    it('Sends a successful standard response with status 200, and a confirmation message', () => {
        // call test function
        clientResponse().send('confirmation message')(req, res, next);

        // define expected results
        sinon.assert.calledWith(res.status, 200);
        sinon.assert.calledWith(res.send, 'confirmation message');
    });

    it('Sends a successful POST response with status 201, and a confirmation message', () => {
        // call test function
        clientResponse().sendPost('confirmation message')(req, res, next);

        // define expected results
        sinon.assert.calledWith(res.status, 201);
        sinon.assert.calledWith(res.send, 'confirmation message');
    });

});