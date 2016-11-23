(function () {

    angular.module("blogFest", ["header","blog"]);

    angular.module("blogFest")
       .config(function() {
        console.log(" i am blogfest config function")
        
    })

    angular.module("blogFest")
        .run(function () {
            console.log("i am the blogFest run function");

        })
    


})();
