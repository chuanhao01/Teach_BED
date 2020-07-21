// Loading dotenv 
require('dotenv').config();

// Importing express and app
const express = require('express');
const app = express();

// CORS
const cors = require('cors');
app.use(cors());

// Loading in controllers
const controllers = require('./controllers');
controllers.init(app);

// Start server on port
const PORT = process.env.PORT;
app.listen(PORT, function(err){
    console.log(`Backend server listening on port: ${PORT}`);
});