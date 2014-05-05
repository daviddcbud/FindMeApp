
angular.module(myAppConfig.moduleName).controller('MainCtrl',['$scope','$log','dataAccess','$location',
     function($scope,$log,dataAccess,$location){


         $scope.model={};
         $scope.model.searchFor='';
         $scope.model.results=[];
         $scope.model.isLoading=false;

         $scope.search= function(){
             $log.debug('searching ');
             dataAccess.searchKeywords($scope.model.searchFor).then(function(data){
                 $scope.model.isLoading=false;
                 $scope.model.results=data;
                 },
                 function(err){
                     $scope.model.isLoading=false;
                     alert(err);
                     });
             


             };
          
          $scope.edit=function(id){
            $location.path('/edit/' + id);
          };


     

    }]);