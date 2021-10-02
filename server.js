const mongoose = require('mongoose');
const app = require('./app');

const mongodb = process.env.MONGODB || 'mongodb://localhost:27017/API'
const port = process.env.PORT || 3000;

mongoose.connect(mongodb, options, (err) =>{
    
})