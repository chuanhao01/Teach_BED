/* --- Main server/root file to run --- */

// Loading env vars
require('dotenv').config();

// Create express server
const express = require('express');
const app = express();

// Adding body parser for post data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Add controllers
const controllers = require('./controllers/index');
controllers.init(app);

// Setting server to listen
const PORT = process.env.PORT;
app.listen(PORT, function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log(`Server is listening on port: ${PORT}`);
});