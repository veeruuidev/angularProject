(function () {
    function phoneFormatter() {

        return function check(input, criteria) {

            var phone = input.toString();
            if (criteria == 'us') {
                return usFormat(phone);

            } else if (criteria == 'in') {
                return indianFormat(phone);
            }

            return phone;

        }


        function usFormat(input) {

            return "+1 " + input.substring(0, 3) + "-" + input.substring(3, 6) + "-" + input.substring(6, 10);
        }



        function indianFormat(input) {

            return "+91" + input.substring(0, 5) + "-" + input.substring(5, 10);
        }





    }
    angular.module("component")
        .filter("PhoneFormatter", [phoneFormatter])


})();
