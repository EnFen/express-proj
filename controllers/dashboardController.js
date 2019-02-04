// defines controllers which transport data to/from dB for dashboard

const dashboardController = (EventWBGS) => {

    // Services
    const controllerServices = require('./controllersServices')(EventWBGS);

    const getDashboard = (req, res, next) => {

        try {
            if (req.params.id) {
                // get event by id passed in on params
                EventWBGS.findById(req.params.id)
                    // handle query data
                    .exec((err, event) => {
                        // if error, handle error
                        if (err) return next(err);

                        // log success
                        console.log('Event document retrieved with id: ', event._id);

                        // send response of single event as json
                        res.json(event);
                    });

            } else {

                // retrieve info from the query string for pagination
                let { pageNum, limit } = req.query;
                pageNum = parseInt(pageNum);
                limit = parseInt(limit);

                // get events cards
                controllerServices.dashboardCards({ 'criteria.denied': { $ne: true } }, pageNum, limit)
                    .then((eventsCards) => {
                        // send response of all events as json
                        res.json(eventsCards);
                    });

            };

        } catch (error) {
            return next(error);
        };
    };

    const updateDashboard = (req, res, next) => {
        // updates criteria model embedded in event model with data from the request body. These data include:
        // socials_check, description_check, volunteers_check, target_value_check, location_check, best_date_check, 
        // key_influencers_check, shortlisted, denied, denied_reason,
        try {

            // update event criteria with values sent on request body
            EventWBGS.findByIdAndUpdate(req.params.id, { criteria: req.body }, { new: true })
                // handle query data
                .exec((err, updatedEvent) => {
                    // if error, handle error
                    if (err) return next(err);

                    // log success
                    console.log('Criteria updated for Event document id: ', updatedEvent._id);

                    // if event has been denied, pass to denied email middleware with email and first name of host
                    if (updatedEvent.criteria.denied) {
                        req.body.email = updatedEvent.host.user.email;
                        req.body.first_name = updatedEvent.host.first_name;
                        return next();
                    };

                    // otherwise, respond with ok
                    res.status(200).send('content updated');
                });

        }
        catch (error) {
            return next(error);
        };
    };

    const getShortlist = (req, res, next) => {

        try {

            // retrieve info from the query string for pagination
            let { pageNum, limit } = req.query;
            pageNum = parseInt(pageNum);
            limit = parseInt(limit);

            // get shortlist cards
            controllerServices.dashboardCards({ 'criteria.denied': { $ne: true }, 'criteria.shortlisted': true }, pageNum, limit)
                .then((shortlistCards) => {
                    // send response of all events as json
                    res.json(shortlistCards);
                });

        }
        catch (error) {
            return next(error);
        };
    };

    return {
        getDashboard,
        updateDashboard,
        getShortlist
    };
};

module.exports = dashboardController;