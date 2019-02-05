const controllerServices = (EventWBGS) => {

    // takes params of query criteria (as an object), as well as pagination values for page number and limit (both integers);
    // returns an object containing an array of data which meets the query and meets 
    // the pagination rules, and also the count of all queries which meet the query criteria
    const dashboardCards = (queryCriteria, pageNum, limit) => {

        const queryCount = () => {
            return new Promise((resolve, reject) => {
                // count all queries
                EventWBGS
                    // get count where criteria true
                    .countDocuments(queryCriteria)
                    // handle query
                    .exec((err, count) => {
                        // if error, handle error
                        if (err) reject(err);
                        resolve(count);
                    });
            });
        };

        const queryData = () => {
            // set up pagination variables
            const startingDoc = !pageNum || pageNum < 0 ? 0 : (pageNum - 1) * limit; // defaults to 0
            const itemsPerPage = !limit || limit <= 0 ? 10 : limit; // defaults to 10

            return new Promise((resolve, reject) => {
                // find all queries
                EventWBGS.find(queryCriteria)
                    // filter out the event_id, organisation, full name, and created at fields
                    .select('_id host.organisation host.first_name host.last_name createdAt criteria.shortlisted')
                    // sort by created_at, with most recent at the top
                    .sort('-createdAt')
                    // filter by items per page, from a starting document
                    .skip(startingDoc).limit(itemsPerPage)
                    // handle query data
                    .exec((err, events) => {
                        // if error, handle error
                        if (err) reject(err);
                        resolve(events);
                    });
            });
        };

        // get data and count
        return Promise.all([queryCount(), queryData()])
            .then((values) => {
                // destructure values
                const [count, data] = values;

                // log success
                console.log(`${data.length} of ${count} events retrieved from collection`);

                // return all query results as json
                return { data, count };

            }).catch((err) => err);
    };

    return {
        dashboardCards
    }
};

module.exports = controllerServices;