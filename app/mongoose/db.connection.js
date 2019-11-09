require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to the database');
});
mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
});
mongoose.connection.on('disconnected', () => {
    console.log('connection disconnected');
});
