phoneApp.controller('PhoneListCtrl', function ($scope,$http) {
  $http.get('app/data/phones.json').success(function(data) {
    $scope.phones = data;
  });
  $scope.orderProp = 'age';
});

phoneApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
