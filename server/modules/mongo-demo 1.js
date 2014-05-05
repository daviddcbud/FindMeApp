var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('demoData', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'demoData' database");
        db.collection('people', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'people' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

var populateDB = function() {
 
    var people = [
    {
        name: "Jacques Cousteau",
        age: "83",
       
    },
    {
        name: "Mary Landry",
        year: "55",
         
    }];
 
    db.collection('peole', function(err, collection) {
        collection.insert(people, {safe:true}, function(err, result) {});
    });
 
};

module.exports.getAll= function(callback){
     
    db.collection('people', function(err, collection) {
        collection.find().toArray(function(err, items) {
             
            callback(err,items);
        });
    });
};

    };