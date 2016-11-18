(function(){
    
    angular.module("blogFest",["header"]);
    
     angular.module("blogFest")
        .config(function () {
            console.log("i am the blogFest module");
        });
    
    
    angular.module("blogFest")
    .run(function(){
        console.log("i am the blogFest run function");
        
    })
    
    
})();