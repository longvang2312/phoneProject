angular
    .module('phoneApp')
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/phones', {
            templateUrl: 'app/partials/phone-list.html',
            controller: 'PhoneListCtrl'
          }).
          when('/phones/:phoneId', {
            templateUrl: 'app/partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
          }).
          otherwise({
            redirectTo: '/phones'
          });
      }]);
