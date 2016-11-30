(function(){
    function loginCtrl(loginSvc){
       this.loginDetails ={};
        this.emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.login= function(){
            console.log(this.loginDetails);
        }
        
        this.login=function(){
            loginSvc.loginUser(this.loginDetails);
            
        }
        
        
    }
    angular.module("login")
    .controller("loginCtrl" ,["loginSvc",loginCtrl])
    
})();