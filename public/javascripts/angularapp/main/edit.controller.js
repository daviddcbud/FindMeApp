
angular.module(myAppConfig.moduleName).controller('EditCtrl',['$scope','$log','dataAccess','$location',
'$routeParams',
     function($scope,$log,dataAccess,$location,$routeParams){


         $scope.model={};
         $scope.model.isLoading=true;
         $scope.model.id=$routeParams.id;
         
         $scope.model.item={};
         if($scope.model.id && $scope.model.id !='0')
         {
           dataAccess.getById($scope.model.id).then(
            function(data){
              $scope.model.item=data;
              $scope.model.item.keywordsText=$scope.model.item.keywords.join(';');
              $scope.model.isLoading=false;
           }, 
            function(err){
              alert(err);
              $scope.model.isLoading=false;
           });
         }
         else{
         $scope.model.isLoading=false;
         }
         
         $scope.save=function(){
              if(!$scope.model.item.notes) $scope.model.item.notes='';
              if(!$scope.model.item.description) $scope.model.item.description='';
			$scope.model.isLoading=true;
            dataAccess.save($scope.model.item)
			.then(
          function(data){
             $location.path('/');
         },
          function(err){
            alert(err);
            $scope.model.isLoading=false;
         });
         };
         
      }]);