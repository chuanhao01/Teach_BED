// Loading dotenv 
require('dotenv').config();

// Importing express and app
const express = require('express');
const app = express();

// Including parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// CORS
const cors = require('cors');
app.use(cors({
    'origin': 'http://localhost:3001',
    credentials: true
}));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

// Loading in controllers
const controllers = require('./controllers');
controllers.init(app);

// Start server on port
const PORT = process.env.PORT;
app.listen(PORT, function(err){
    console.log(`Backend server listening on port: ${PORT}`);
});