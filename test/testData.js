const expressionOfInterest = JSON.stringify({
    first_name: "Bar",
    last_name: "Foo",
    organisation: "BarFoo Inc.",
    email: "test@bar.com",
    socials: ["http://facebook.com", "http://linkedIn.com"],
    description: "I really want to change the world in 3 easy steps...",
    volunteers: true,
    target_value: "200-300",
    location: ["Brisbane", 4000, "Australia"],
    best_time: "1/11/19 - 30/11/19",
    local_council_relationship: true,
    local_council_details: "Brisbane city council. Contact is Bar Foo, who is the mayor",
    key_influencers: ["Jim", "Bob", "Sarah"]
});

module.exports = { expressionOfInterest }