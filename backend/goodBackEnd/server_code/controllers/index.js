// Importing other sub modules in dir
const usersController = require('./usersController');
const listingsController = require('./listingsController');

// Creating main obj to export
const controllers = {
    init(app){
        app.get('/test', function(req, res){
            res.status(200).send({
                'Test': 'Recieved'
            });
        });
        usersController.init(app);
        // listingsController.init(app);
    }
};

module.exports = controllers;