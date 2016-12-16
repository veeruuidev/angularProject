(
    function () {

        function productCtrl($scope, productSvc, $rootScope) {
            $scope.search = function () {
                productSvc.searchProducts($scope.searchProduct)
                    .then(function (response) {
                        $scope.products = response;
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            };
            $scope.addProductToCart = function (product) {
                product.addedToCart = true;
                productSvc.addToCart(product);
                var data = {
                    salePrice: product.salePrice,
                    name: product.name
                }



                $rootScope.$broadcast("PROUDCT-ADDED", {
                    item: data
                });
            };

            $scope.removeProductToCart = function (product) {
              
                productSvc.removeItemsFromCart();
                
                var removedata={
                    
                    salePrice: product.salePrice,
                    name: product.name
                }

                $rootScope.$broadcast("PROUDCT-REMOVED", {
                    item: removedata
                });
            };



        }
        angular.module("product")
            .controller("productCtrl", ["$scope", "productSvc", "$rootScope", productCtrl]);
    }

)();
