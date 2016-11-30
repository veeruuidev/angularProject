(function () {

    function lookupSvc($http,$q) {

        this.getCountries = function () {

            var dfd=$q.defer();
            $http.get("app/api/countries.json")
            .then( function (response){
                
                dfd.resolve(response);
                 console.log("i am executing first");
                
            })
            .catch( function(response){
                dfd.reject(response);
                
            });
            
            return dfd.promise;
            
            
            
        };


        
        
        
    }

    angular.module("lookup")
        .service("lookupSvc", ["$http","$q", lookupSvc])

})();
