// install required dependencies
const mongoose = require('mongoose');

// create a schema for jobs data
const jobSchema = mongoose.Schema({
    name: String,
    location: String,
    posted: String,
    status: String,
    applied: Number,
    jobViews: Number,
    daysLeft: Number,
    premium: Boolean,
    dateFormat: String
});


// create a model and store to mongodb database as name `job`
const JobModel = mongoose.model('job', jobSchema);


// export it to use everywhere in our local file
module.exports = { JobModel };