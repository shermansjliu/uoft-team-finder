'use strict';

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://shermansjliu:csc309team04@cluster0.f7u4c.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


module.exports = { mongoose }
