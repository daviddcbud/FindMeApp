
angular.module( myAppConfig.moduleName ).factory( 'demoService', ['$http', '$q',
    function ( $http, $q ) {


        function getSomeDemoData() {
            var defer = $q.defer();

            $http.get( '/demoData' ).
                success( function ( data ) {

                    defer.resolve( data );
                }
                ).
                error( function ( err ) {
                    defer.reject( err );
                });


            return defer.promise;
        }

    return {
            getData: getSomeDemoData,
        }



    }
] );