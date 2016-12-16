(function(){
    function registerSvc(){
        this.registerUser=function(userInfo){
            console.log(userInfo);
        };
        
    }
    angular.module("register")
    .service("registerSvc",[registerSvc])
    
})();