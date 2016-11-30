(function () {

    angular.module("blogFest", ["header", "ui.router", "blog","register","login","lookup"]);

    angular.module("blogFest")
        .config(["$stateProvider", "$urlRouterProvider",
             function ($stateProvider, $urlRouterProvider) {


                var blogObj = {
                    templateUrl: "app/blog/blog.html",
                    controller: "blogCtrl",
                    name: "Blog"
                };

                var loginObj = {
                    templateUrl: "app/login/login.html",
                    name: "Login",
                    controller:"loginCtrl as lc"
                };
                var registerObj = {
                    templateUrl: "app/register/register.html",
                    name: "Register",
                    url:"/register"
                };
                var homeObj = {
                    templateUrl: "app/home/home.html",
                    name: "Home"
                };
                $stateProvider.state("Blog", blogObj);
                $stateProvider.state("Login", loginObj);
                $stateProvider.state("Register", registerObj);
                $stateProvider.state("Home", homeObj);



                }])





})();
