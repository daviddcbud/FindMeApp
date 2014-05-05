var MongoHelper = require('./mongo-helper');
//var dbAccess=new MongoHelper('localhost', 27017,'demoData','people'); 
var dbAccess;
var env=process.env.NODE_ENV || 'development';
console.log('in dev mode=' + env);
    if ('development' == env) {
        console.log('in dev mode, connect to local db');
        dbAccess= new MongoHelper('localhost', 27017,'devtesting','people'); 
        }
    else{
    dbAccess= new MongoHelper('ds033067.mongolab.com', 33067,'devtesting','people','test','test_dev'); 
}
 
 var people = [
    {
        name: "Jacques Cousteau",
        age: "83",
       
    },
    {
        name: "Mary Landry",
        year: "55",
         
    }];

 dbAccess.openDb(people,null);
  

module.exports.openDb= function(callback){
      
    dbAccess.openDb(people,callback);
};
 

module.exports.getAll= function(callback){
      
    dbAccess.findAll(callback);
};

module.exports.findById=function(id,callback){
    dbAccess.findById(id,callback);
    };
    