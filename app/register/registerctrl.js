(function () {

    function registerCtrl(registerSvc,lookupSvc) {
        
        var vm=this;
        
        vm.emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        vm.passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

        vm.userDetails = {};

        vm.register = function () {
            registerSvc.registerUser(this.userDetails);
        };
        
        
        
        
        
        
        lookupSvc.getCountries()
        
        .then(function(response){
            vm.countries=response.data.countries;
        })
        .catch(function(response){
            console.log(response);
            
        })
        
        .finally(function(response){
            
            console.log(response);
            
        });
        
        
        
        
        
        
        
        
        
        
        
    }
    angular.module("register")
        .controller("registerCtrl", ["registerSvc","lookupSvc", registerCtrl]);

})();