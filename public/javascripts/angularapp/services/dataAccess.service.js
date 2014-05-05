
angular.module( myAppConfig.moduleName ).factory( 'dataAccess', ['$http', '$q',
    function ( $http, $q ) {

    
        function getById(id) {
            var defer = $q.defer();

            $http.get('/api/getById/' + id).
                success( function ( data ) {

                    defer.resolve( data );
                }
                ).
                error( function ( err ) {
                    defer.reject( err );
                });


            return defer.promise;
        }

        function searchKeywords(keywords) {
            var defer = $q.defer();

            $http.get('/api/searchByKeywords/' + keywords).
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
            searchKeywords: searchKeywords,
            getById: getById, 
        }



    }
] );