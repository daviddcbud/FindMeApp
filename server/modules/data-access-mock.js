
(function(controller)
    {
        function Sample(id,name, keywords, notes,description, srcLocation)
        {
            this.description=description;
            this.id=id;
            this.name=name;
            this.keywords=keywords;
            this.notes=notes;
            this.srcLocation=srcLocation;

        }

var sampleData=[];
var sample=new Sample(1,'Map Viewer',
  ['map','mapviewer','ais maps','.net map viewer'],['\\snsdev02\appdocs\test.txt'],'.NET map viewer','TFS SNSDEV02 $\Common\MapViewerPrototype');
sampleData.push(sample);
sample=new Sample(2,'Acres Export',['export','acres','acres export'],['\\snsdev02\appdocs\test.txt'],'this is some description','TFSOnline MapAcresExport');
sampleData.push(sample);

  controller.findById=function(id,callback){
    callback(null,sampleData[id-1]);


    };

  controller.findAll=function(callback){
    callback(null,sampleData);


    };
})(module.exports);