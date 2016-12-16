(function(){
    function userSvc($http, $q){
        
        this.getUsers= function(){
            
            var dfd=$q.defer();
            
            $http.get('app/api/user.json')
            .then (function(response){
                dfd.resolve(response);
                
            })
            .catch (function(response){
                
                dfd.reject(response);
                
            });
            
            return dfd.promise;
            
        }
        
        
        
        
        
        
        
        
    }
    angular.module("user")
    .service("userSvc",["$http","$q", userSvc])
    
})();