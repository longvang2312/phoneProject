var phoneAppFillter =  angular.module('phoneAppFillter', []);
phoneAppFillter.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
