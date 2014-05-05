
/*
 * GET home page.
 */

 
exports.index = function(req, res){
  res.render('index', { title: 'FindMeApp' });
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
