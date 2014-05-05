
angular.module(myAppConfig.moduleName).controller('EditCtrl',['$scope','$log','dataAccess','$location',
'$routeParams',
     function($scope,$log,dataAccess,$location,$routeParams){


         $scope.model={};
         $scope.model.isLoading=true;
         $scope.model.id=$routeParams.id;
         
         dataAccess.getById($scope.model.id).then(
          function(data){
            $scope.model.item=data;
            $scope.model.isLoading=false;
         },
          function(err){
            alert(err);
            $scope.model.isLoading=false;
         });
         
         $scope.save=function(){
            
         };
         
      }]);