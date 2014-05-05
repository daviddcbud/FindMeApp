
angular.module(myAppConfig.moduleName).controller('EditCtrl',['$scope','$log','dataAccess','$location',
'$routeParams',
     function($scope,$log,dataAccess,$location,$routeParams){


         $scope.model={};
         $scope.model.isLoading=false;
         $scope.model.id=$routeParams.id;
      }]);