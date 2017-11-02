var app = angular.module("invoiceApp", [])
    .controller("InvoiceController",function ($scope) {
        $scope.qty = 1;
        $scope.cost = 2;
        $scope.inCurr = 'EUR';
        $scope.currencies = ['USD', 'EUR', 'CNY'];
        $scope.usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        $scope.pay = function(){
            alert('Payment Has been Made Successfully...');
        };
        $scope.convertCurrency = function(amount, inCurr, outCurr) {
            return amount * $scope.usdToForeignRates[outCurr] / $scope.usdToForeignRates[inCurr];
        };
        $scope.total = function(outCurr) {
            return $scope.convertCurrency($scope.qty * $scope.cost, $scope.inCurr, outCurr);
        };
        //console.log($scope);
        //$scope.pay();
    });
    app.directive("totalDirective", function() {
        return {
            //template : "{{total(ct) | currency:ct}}"
              template : "<span class='text-danger'>{{ct}} :</span> {{total(ct)}}"
        };
    });