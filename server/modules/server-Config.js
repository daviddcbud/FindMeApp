var path = require('path');
var bodyparser=require("body-parser");
var favicon=require('static-favicon');
var logger=require('morgan');
var errorhandler=require("errorhandler");
var methodOverride = require('method-override');
var express = require('express');
module.exports.configureAppSettings=function(expressApp,dirName){
    var port=process.env.PORT || 3000;
     var env=process.env.NODE_ENV || 'development'
    
    if('test'==env){
           port=3001;
     }
    expressApp.set('port', port);
    
    expressApp.set('views', path.join(dirName, 'server/views'));
    expressApp.set('view engine', 'jade');  
    console.log('configured app settings');
};

module.exports.configureMiddleWare= function(expressApp, loggerOption, dirName) {
    expressApp.use(favicon());
    expressApp.use(logger(loggerOption));
    expressApp.use(bodyparser());
    expressApp.use(methodOverride());
    var publicDirectory=path.join(dirName,'public');
    expressApp.use(require('stylus').middleware(publicDirectory));
    expressApp.use(express.static(publicDirectory));

    // development only
    var env=process.env.NODE_ENV || 'development'
    if ('development' == env) {
        console.log('development mode, using errorhandler middleware');
        expressApp.use(errorhandler());
    }
    
    console.log('middleware configured');
};