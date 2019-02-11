const clientResponse = require('../../../middleware/res/clientResponse');

test('sends response with status 200, and a confirmation message', () => {
    // set up variables for send mesage
    const req = {};
    const res = {
        status: jest.fn(status => status),
        send: jest.fn(message => message)
    };
    const next = jest.fn()

    // call test function
    clientResponse().send('confirmation message')(req, res, next);

    // define expected results
    expect(res.status).toBeCalled();
    expect(res.status).toHaveReturnedWith(200);
    expect(res.send).toBeCalled();
    expect(res.send).toHaveReturnedWith('confirmation message');

});