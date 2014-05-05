
angular.module(myAppConfig.moduleName).controller('MainCtrl',['$scope','$log','dataAccess','$location',
     function($scope,$log,dataAccess,$location){


         $scope.model={};
         $scope.model.searchFor='';
         $scope.model.results=[];
         $scope.model.isLoading=false;
        $scope.hasSearched=false;
		 if(sessionStorage.searchText){
		  $scope.model.searchFor=sessionStorage.searchText;
		  search();
		 }
		
		function search(){
			sessionStorage.searchText=$scope.model.searchFor;
             $log.debug('searching ');
             
             dataAccess.searchKeywords($scope.model.searchFor).then(function(data){
                 $scope.model.isLoading=false;
                 $scope.model.results=data;
                 $scope.hasSearched=true;
                 },
                 function(err){
                     $scope.model.isLoading=false;
                     alert(err);
                     });
		}
		
         $scope.search= function(){
			 search();
             


             };
          
          $scope.edit=function(id){
            $location.path('/edit/' + id);
          };


     

    }]);