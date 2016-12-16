(function(){
    function loginCtrl(){
       this.loginDetails ={};
        this.emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.login= function(){
            console.log(this.loginDetails);
        }
    }
    angular.module("login")
    .controller("loginCtrl",[loginCtrl])
    
})();