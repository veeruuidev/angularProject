(function(){
    
    
    function headerCtrlFn($scope){
        
        $scope.brandName="Blogger.io";
        $scope.navItems=["home","Blog","Register","Login"];
        
    }
    
    angular.module("header")
    .controller("headerctrl",["$scope", headerCtrlFn]);
    
})();