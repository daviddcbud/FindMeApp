
/*
 * GET home page.
 */

 
exports.index = function(req, res){
  res.render('index', { title: 'FindMeApp' });
};


exports.getById = function(req, res){
    var id=req.params.id;
    var env=process.env.NODE_ENV || 'development';

   var db;
   if('development'==env){
       db=require("../server/modules/data-access-mock");
       }
   else{
        db=require("../server/modules/data-access");
       }
     
    db.findById(id,function(err, item) {
        console.log('sending item');
        res.send(item);
        }); 
    
};

exports.searchByKeywords = function(req, res){
    var keywords=req.params.keywords;
    var env=process.env.NODE_ENV || 'development';

   var db;
   if('development'==env){
       db=require("../server/modules/data-access-mock");
       }
   else{
        db=require("../server/modules/data-access");
       }
     
    db.findAll(function(err, items) {
        console.log('sending items');
        res.send(items);
        }); 
    
};
