// install required dependencies
const express = require('express');
const { JobModel } = require('../models/job.model');
const data = require('../assets/data.json');


// create a job route for building crud app
const jobRoute = express.Router();


// ---------------- GET DATA OF JOB ROUTE ---------------- //
jobRoute.get('/jobdata', async (request, response) => {
    const query = request.body;

    try {
        const job_data = await JobModel.find({});
        response.send(job_data);
    } catch (error) {
        response.send({
            'message': 'something went wrong',
            'error': error
        });
    }
});


// ---------------- POST DATA OF JOB ROUTE ---------------- //
jobRoute.post('/addjobs', async (request, response) => {
    const { name, location, posted, status, applied, jobViews, daysLeft, premium, dateFormat } = request.body;
    // console.log('data: ',data);

    try {
        // if (name && location && posted && status && applied && jobViews && daysLeft && dateFormat) {
            const add_data = new JobModel({
                name,
                location,
                posted,
                status,
                applied,
                jobViews,
                daysLeft,
                premium,
                dateFormat
            });
            await add_data.save();
            response.json(add_data)
            // response.send({
            //     'message': 'job data successfully added',
            //     'data': data
            // });
        // } else {
        //     response.send({
        //         'message': 'All fields are required'
        //     })
        // }
    } catch (error) {
        response.send({
            'message': 'something went wrong',
            'error': error
        });
    }
});


// export it to use everywhere in our local file
module.exports = { jobRoute };