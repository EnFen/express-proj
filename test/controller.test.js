// // Controllers
// const eoiController = require('../controllers/eoiController');
// const dashboardController = require('../controllers/dashboardController');
// const usersController = require('../controllers/usersController');

// // set up mock Models to pass into controller tests
// function User() {
//     this.save = () => { };
//     this.validate = () => { };
// };

// function Host() {
//     this.save = () => { };
//     this.validate = () => { };
// };

// function Criteria() {

// };

// function EventWBGS() {
//     this.save = () => { };
//     this.validate = () => { };
// };

// // set up mock middleware variables
// let req = { body: {}, params: {}, query: { pageNum: 1, limit: 10 } };
// let res = {
//     status: null,
//     send: () => { },
//     json: jest.fn((data) => {
//         console.log('in res.json');
//         return ('json method called', data);
//     })
// };
// let next = jest.fn((err) => {
//     console.log('in mock next');
//     if (err) {
//         console.log(err)
//         return 'error detected', err;
//     };
//     return 'request passed to next middleware';
// });

// // EOI CONTROLLER TESTS
// test('eoiController calls "next" middleware after POST request', () => {

//     // run test function
//     eoiController(User, Host, Criteria, EventWBGS).post(req, res, next);
//     // Define results expected from test
//     expect(next).toBeCalled();
//     expect(next).toHaveReturnedWith('request passed to next middleware');
// });

// // // DASHBOARD CONTROLLER TESTS
// // test('dashboardController responds with json object on GET request passed without params', () => {

// //     // run test function
// //     dashboardController(EventWBGS).getEvents(req, res, next);
// //     // Define results expected from test
// //     expect(res.json).toBeCalled();
// // });

