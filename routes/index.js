
/*
 * GET home page.
 */

 
exports.index = function(req, res){
  res.render('index', { title: 'FindMeApp' });
};


exports.save = function(req, res){
    var document=req.body;
    var env=process.env.NODE_ENV || 'development';

   var db;
   if('test'==env){
       db=require("../server/modules/data-access-mock");
       }
   else{
        db=require("../server/modules/data-access");
       }
     
    db.save(document,function(err) {
        if(err){
			res.send(400,err);
		}
		else{
			res.send(200,'');
		}
        }); 
    
};

exports.getById = function(req, res){
    var id=req.params.id;
    var env=process.env.NODE_ENV || 'development';

   var db;
   if('test'==env){
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
   if('test'==env){
       db=require("../server/modules/data-access-mock");
       }
   else{
        db=require("../server/modules/data-access");
       }
     
    db.findAll(keywords, function(err, items) {
        console.log('sending items');
        res.send(items);
        }); 
    
};
