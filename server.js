
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
 
var http = require('http');
 
var app = express();
var serverConfig=require('./server/modules/server-Config');
serverConfig.configureAppSettings(app, __dirname);
serverConfig.configureMiddleWare(app,'dev',__dirname);
 
app.use(function(req,res,next) {
       //your middleware goes here
       next();
});
 

var mainRoute=express.Router();
//create a server route for the partial jade views that will be used by angular for some of the template
//url's so instead of having static html templates, we can also use dynamic jade templates
// (e.g. /partials/main  /partials/customerlist)
mainRoute.get('/partials/*', function(req,res) {
     
    res.render('partials/' + req.params["0"]);
    });



//default route to the index route
mainRoute.get('/api/searchByKeywords/:keywords', routes.searchByKeywords);
mainRoute.get('/api/getById/:id', routes.getById);
mainRoute.post('/api/save', routes.save);
mainRoute.get('/', routes.index);
mainRoute.get('*', routes.index);
app.use('/',mainRoute);

//fire up the server and get busy
http.createServer(app).listen(app.settings.port, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
