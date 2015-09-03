var phoneAppController = angular.module('phoneAppController',[]);

phoneAppController.controller('PhoneListCtrl', function ($scope,Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
});

phoneApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams','Phone',
  function($scope, $routeParams,Phone) {
     $scope.phone = Phone.get({phoneId : $routeParams.phoneId},function(phone){
     $scope.mainImageUrl = phone.images[0];
     });
           $scope.setImage = function(imageUrl) {
                $scope.mainImageUrl = imageUrl;
           };
  }]);

