const express = require('express');

const dashboardRoutes = (EventWBGS) => {

    const dashboardRouter = express.Router();

    // middlewware
    const { requestValidation } = require('../middleware/validation/JoiValidation');
    const deniedEmail = require('../middleware/email/deniedEmail');
    const clientResponse = require('../middleware/res/clientResponse')();

    // controllers - transport data to/from dB
    const dashboardController = require('../controllers/dashboardController')(EventWBGS);

    // endpoints
    // --- requests made to /dashboard ---
    dashboardRouter.route('/')
        .get(
            dashboardController.getEvents
        );

    // --- requests made to /dashboard/shortlist ---
    dashboardRouter.route('/shortlist')
        .get(
            dashboardController.getShortlist
        );
    // --- requests made to /dashboard/:id ---

    dashboardRouter.route('/:id')
        .get(
            dashboardController.getEvents
        )
        .put(
            requestValidation('admin'),
            dashboardController.updateEvent,
            deniedEmail,
            clientResponse.send('An email has been sent to the prospective host explaining reason for denial.')
        );

    return dashboardRouter;
};

module.exports = dashboardRoutes;