var phoneAppController = angular.module('phoneAppController',[]);

phoneAppController.controller('PhoneListCtrl', function ($scope,$http) {
  $http.get('app/data/phones.json').success(function(data) {
    $scope.phones = data;
  });
  $scope.orderProp = 'age';
});

phoneApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {
     $http.get('app/data/' + $routeParams.phoneId + '.json').success(function(data) {
          $scope.phone = data;
          $scope.mainImageUrl = data.images[0];
           });
           $scope.setImage = function(imageUrl) {
                $scope.mainImageUrl = imageUrl;
           };
  }]);

