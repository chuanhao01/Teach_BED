// Importing model
const model = require('../model/index');

// Creating module code
const usersController = {
    init(app){
        app.post('/user', function(req, res){
            console.log(req.body);
            res.send();
        });
    }
};

module.exports = usersController;