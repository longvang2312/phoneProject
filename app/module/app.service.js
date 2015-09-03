var phoneAppService = angular.module('phoneAppService', ['ngResource']);

phoneAppService.factory('Phone', ['$resource',
  function($resource){
    return $resource('app/data/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);