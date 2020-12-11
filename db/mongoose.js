'use strict';

const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/cluster0"|| process.env.MONGODB_URI

// const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.t3zms.mongodb.net/User?retryWrites=true&w=majority'
// const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Team4'
mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


module.exports = { mongoose }
