(function () {


    function userCtrl(userSvc, $scope) {
        
        $scope.userCount = 5;

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname; //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
        
        $scope.add= function(){
            
            
        }
        

        userSvc.getUsers()
            .then(function (response) {
                $scope.users = response.data.users;
                console.log($scope.users);
            })
            .catch(function (respnse) {
                console.log(respnse);
            })

        $scope.showMore = function () {
            $scope.userCount += 10;
        }
        
        $scope.showLess = function () {
            $scope.userCount -= 10;
        }
        
        
        $scope.editUser = function(userdata){
               
                $scope.userEdit =userdata;
                $scope.title="Edit "+userdata.name;
            };
        $scope.saveDetails= function(){
            console.log($scope.userEdit);
        
        }

    }


    angular.module("user")
        .controller("userCtrl", ["userSvc", "$scope", userCtrl]);

})();
