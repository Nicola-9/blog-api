// Load Express module
const express = require('express');
const app = express();
// Load Mongoose Module
const mongoose = require('mongoose');
// Load Body Parser Module
const bodyParser = require('body-parser');
// Load local Task module
const Article = require('./api/models/articleModel');
// Load Routes Module
const expressRoutes = require('./api/routes/blogRoutes');

// Set Host and Port where the server is going to run
// Host setted on 0.0.0.0 because it means all network interface
// Port setted on enviroment variable named PORT if it is setted or it setted on port 3000
const HOST = '0.0.0.0'
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongoose instance connection
mongoose.connect('mongodb://localhost/BlogDB', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false 
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    // Pass to next layer of middleware
    next();
});

// Register routes endpoint
expressRoutes.routes(app);

// Start server
app.listen(PORT, HOST);

console.log(`MyBlog RESTful Server is running on http://${HOST}:${PORT}`);