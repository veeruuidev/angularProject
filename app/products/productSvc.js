(function () {
    function productSvc($http, $q) {
        this.searchProducts = function (parameter) {
            //           var url ="http://api.walmartlabs.com/v1"

            
          
            function productMapper(input) {

                var output = {};
                output.name = input.name;
                output.thumbnailImage = input.thumbnailImage;
                output.shortDescription = input.shortDescription ? input.shortDescription : input.longDescription;
                output.salePrice = input.salePrice;

                return output;

            }

            
           

            var dfd = $q.defer();
            
            
            $http.get('/WM/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=' + parameter)
                .then(function (response) {
                    var productArray = [];
                    angular.forEach(response.data.items, function (item) {

                        productArray.push(productMapper(item));

                        
                        dfd.resolve(productArray);

                    })


                })
                .catch(function (response) {
                    console.log(response);
                    dfd.reject(response);
                });
            return dfd.promise;
        }
        
         this.cartItems =[];
        this.addToCart = function(item){
           this.cartItems.push(item);
       };
        
       this.getProductFromCart = function(item){
           return this.cartItems;
       };
        
       this.removeItemsFromCart = function(){
                  return this.cartItems;
       };
        

    }
    angular.module("product")
        .service("productSvc", ["$http", "$q", productSvc])

})();
