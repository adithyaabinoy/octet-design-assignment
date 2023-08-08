// install required dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// connect our repository to mongodb database using mongoose
const connection = mongoose.connect(process.env.mongoURL);

// export it to use everywhere in our local file
module.exports = { connection };
