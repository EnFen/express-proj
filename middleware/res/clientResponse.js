// send response to client
const clientResponse = () => {
    // send plain text
    const send = (message) => (req, res, next) => {
        res.send(message);
    };

    return {
        send
    };
};

module.exports = clientResponse;