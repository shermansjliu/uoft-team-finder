'use strict';

const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/cluster0"|| process.env.MONGODB_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


module.exports = { mongoose }
