var myAppConfig=myAppConfig || {};
myAppConfig.moduleName='myModule';
angular.module(myAppConfig.moduleName,['ngResource','ngRoute']);

angular.module(myAppConfig.moduleName).config(['$routeProvider','$locationProvider', 
    function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {templateUrl:'/partials/main', controller:'MainCtrl'}).
        when('/edit/:id', {templateUrl:'/partials/edit', controller:'EditCtrl'});


        }]);



 