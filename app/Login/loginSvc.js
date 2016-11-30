( function(){
    
    function loginSvc(){
        
        this.loginUser=function(loginUserInfo){
            
            console.log(loginUserInfo);
            
            
        }
        
    }
    
    
    angular.module("login")
    .service("loginSvc",[loginSvc]);
    
    
})();