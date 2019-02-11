// defines controllers which transport data to/from dB for expression of interest

const eoiController = (User, Host, Criteria, EventWBGS) => {

    const post = (req, res, next) => {
        try {

            // destructure request
            const {
                body: {
                    email,
                    first_name,
                    last_name,
                    organisation,
                    socials,
                    description,
                    volunteers,
                    target_value,
                    location,
                    best_time,
                    local_council_relationship,
                    local_council_details,
                    key_influencers
                }
            } = req;

            // construct models
            const newUser = new User({
                email
            });

            const newHost = new Host({
                user: newUser,
                first_name,
                last_name,
                organisation,
                socials
            });

            const newEvent = new EventWBGS({
                host: newHost,
                criteria: new Criteria({}),
                description,
                volunteers,
                target_value,
                location,
                best_time,
                local_council_relationship,
                local_council_details,
                key_influencers
            });

            // validate data for all entries before saving to dB
            newUser.validate();
            newHost.validate();
            newEvent.validate();

            // save data to dB
            newUser.save();
            newHost.save();
            newEvent.save();

            // If validation and save successful, send to next middleware
            next();

        } catch (error) {
            return next(error);
        };
    };

    return {
        post
    };
};

module.exports = eoiController;