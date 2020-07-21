const controllers = {
    init(app){
        // Test API
        app.get('/test', function(req, res){
            res.send('Test recieved');
        });
        // Basic APIs and data
        app.get('/basic', function(req, res){
            res.status(203).send({
                'hello': 'world'
            });
        });
    }
};

module.exports = controllers;