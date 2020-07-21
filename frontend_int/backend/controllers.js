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
        app.get('/basic/error', function(req, res){
            res.status(400).send();
        });
        app.post('/basic/post', function(req, res){
            console.log(req.body);
            res.status(200).send(req.body);
        });

        // Cookies Fun
        app.get('/cookies', function(req, res){
            res
            .cookie('userId', '123')
            .cookie('authToken', '123abc')
            .send();
        });
        app.get('/cookies/get', function(req, res){
            console.log(req.cookies);
            res.send(req.cookies);
        });
    }
};

module.exports = controllers;