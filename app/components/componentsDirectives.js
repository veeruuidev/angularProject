(function () {

    function nbBrandName() {

        return {
            template: '<a class="navbar-brand" href="#">{{brandName}}</a>'

        };
    }

    function nbHeader() {
        return {

            templateUrl: 'app/header/header.html',
            restrict: "A,E,C,M"
        };

    }

    function nbShow() {
        return {
            restrict: "A",
            link: function (x, element, attrs) {
                console.log(x);
                console.log(element);
                console.log(attrs);
            }
        }
    }

    function nbDatePicker() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                console.log(attrs);
                console.log(scope);
                console.log(element);
                element.datepicker();
            }

        };
    }

    function nbEnter() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                element.bind("keypress", function (e) {

                    if (e.keyCode == 13) {
                        console.log(attrs["nbEnter"]);
                        console.log("Enter key pressed");
                        var methodName = attrs["nbEnter"];
                        scope.$eval(methodName);
                    }
                })
            }

        };
    }
    
    
    function nbDetails(){
        
        return{
          
            restrict:"A",
            scope:{
                details:"=",
                heading:"@",
                saveDetails:"&"
                
            },
            templateUrl:"app/components/userdetails.html"
        };
        
        
    }



    angular.module("component")
        .directive("nbBrandName", [nbBrandName])
        .directive("nbHeader", [nbHeader])
        .directive("nbShow", [nbShow])
        .directive("nbDatePicker", [nbDatePicker])
        .directive("nbEnter", [nbEnter])
        .directive("nbDetails", [nbDetails]);
})();
