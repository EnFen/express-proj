const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Criteria Schema
const criteriaSchema = new Schema({
    socials_check: {
        type: Boolean,
        default: false
    },
    description_check: {
        type: Boolean,
        default: false
    },
    volunteers_check: {
        type: Boolean,
        default: false
    },
    target_value_check: {
        type: Boolean,
        default: false
    },
    location_check: {
        type: Boolean,
        default: false
    },
    best_date_check: {
        type: Boolean,
        default: false
    },
    key_influencers_check: {
        type: Boolean,
        default: false
    },
    shortlisted: {
        type: Boolean,
        default: false
    },
    denied: {
        type: Boolean,
        default: false
    },
    denied_reason: {
        type: String,
        required: true,
        default: 'uncategorised'
    }
});

// Create EventCriterion model
const Criteria = mongoose.model('Criteria', criteriaSchema);

// Create and export Event model
module.exports = { criteriaSchema, Criteria };