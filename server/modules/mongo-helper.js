var mongo = require( 'mongodb' );



function MongoHelper( servername, port, databaseName, collectionName, username, password ) {
    this.colName = collectionName;
    this.dbName = databaseName;
    this.svrName = servername;
    this.svrPort = port;
    this.findAll = findAll;
    this.findById = findById;
    this.openDb = openDb;
    this.username = username;
    this.password = password;
    this.save=save;


}

module.exports = MongoHelper;

function openDb(self,callback ) {
    this.callback=callback;
    
    
    var Server = mongo.Server,
        Db = mongo.Db;

    var server = new Server( self.svrName, this.svrPort, { auto_reconnect: true });
    var db = new Db( self.dbName, server );


     
    db.open(function(err,db){
        
        self.callback(err,db);
        if(err)throw err;
      }
      );
};


function findAll( keywords,callback ) {
    var self = this;
    
    var findArray=keywords.split(/;|,/);
    this.openDb(self, function (err, db ) {
     if(err) throw(err);
        db.collection( self.colName, function ( err, collection ) {
            if ( err ) {
                console.log( err );
                throw err;
            }
            else {
                collection.find({keywords: { $in: findArray}}).toArray( function ( err, items ) {

                    callback( err, items );
                });
            }
        });
    });

}

function findById( id, callback ) {
    var self = this;
    var BSON = mongo.BSONPure;
    this.openDb(self,function( err, db ) {
        if(err) throw(err);
        
        db.collection( self.colName, function ( err, collection ) {
            collection.findOne( { '_id': new BSON.ObjectID( id ) }, function ( err, item ) {
                callback( err, item );
            });
        });
    });
}

function save(document, callback){
  var self=this;
  var BSON = mongo.BSONPure;
  this.openDb(this,function ( err,db ) {
        if(err) throw(err);
        
        db.collection( self.colName, function ( err, collection ) {
            if(err) callback(err);
            if(document._id){
                  var id=document._id;
                  
                  var keywords=document.keywordsText.split(/;|,/);
                  
                  collection.update({'_id': new BSON.ObjectID( id )}, {name:document.name,
srcLocation:document.srcLocation, description:document.description, notes:document.notes, keywords:keywords}, function ( err ) {
                  callback( err );
                  });

            }
            else{
              collection.save( document, function ( err ) {
                  callback( err );
              });
            }
        });
    });
}





