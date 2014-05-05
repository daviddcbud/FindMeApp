var MongoHelper = require('./mongo-helper');
var dbAccess;
var env=process.env.NODE_ENV || 'development';
    if ('development' == env) {
        console.log('in dev mode, connect to local db');
        dbAccess= new MongoHelper('localhost', 27017,'findMeApp','apps'); 
        }
    else{
    dbAccess= new MongoHelper('snsdev03', 27017,'findMeApp','apps'); 
}
 
 
dbAccess.openDb([],null);
  

module.exports.openDb= function(callback){
      
    dbAccess.openDb(people,callback);
};
 

module.exports.findAll= function(callback){
      
    dbAccess.findAll(callback);
};

module.exports.findById=function(id,callback){
    dbAccess.findById(id,callback);
    };
    