var MongoHelper = require('./mongo-helper');
var dbAccess;
var env=process.env.NODE_ENV || 'development';
    if ('development' == env) {
        
        dbAccess= new MongoHelper('freemansnewpc', 27017,'findMeApp','apps'); 
        }
    else{
    dbAccess= new MongoHelper('snsdev03', 27017,'findMeApp','apps'); 
}
 
 
  

module.exports.openDb= function(callback){
      
    dbAccess.openDb(callback);
};
 

module.exports.findAll= function(keywords,callback){
      
    dbAccess.findAll(keywords,callback);
};

module.exports.findById=function(id,callback){
    dbAccess.findById(id,callback);
    };

    

module.exports.save=function(document,callback){
    dbAccess.save(document,callback);
    };
    