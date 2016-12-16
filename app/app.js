(function () {
    /*Module Creation*/
    /* Integratre ui.router*/
    angular.module("BlogFace", ["header", "ui.router", "product","register","login","lookup","user","component"]);
    

    /*consuming the module*/
    angular.module("BlogFace")
        .config(["$stateProvider", "$urlRouterProvider",
             function ($stateProvider, $urlRouterProvider) {
                /*Blog View Integration
                   1. Creating the state object
                   2. registering the state object
                   3. Invoking the state
                */
                 
                var productObj = {
                    templateUrl: "app/products/product.html",
                    controller: "productCtrl",
                    name: "Product",
                    url:"/product"
                };

                var loginObj = {
                    templateUrl: "app/login/login.html",
                    name: "Login",
                    url:"/login",
                    controller:"loginCtrl as lc"
                };
                var registerObj = {
                    templateUrl: "app/register/register.html",
                    name: "register",
                    url:"/register"
                };
                var homeObj = {
                    templateUrl: "app/home/home.html",
                    name: "Home",
                    url:"/home"
                };
                 
                 var userObj = {
                    templateUrl: "app/user/user.html",
                    name: "User",
                    url:"/User",
                    controller: "userCtrl"
                };
                 
                 
                $stateProvider.state("Product", productObj);
                $stateProvider.state("Login", loginObj);
                $stateProvider.state("Register", registerObj);
                $stateProvider.state("Home", homeObj);
                $stateProvider.state("User", userObj);



//                console.log("Blog Face Module");
    }])
        .run([function () {
//            console.log("Blog Face run function");
    }]);


})();

/*
 config
 run
 controller
 service
 factory
 filter
 directive
 provider
 constant
 value
 component.
 

*/
