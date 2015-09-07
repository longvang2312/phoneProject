angular
    .module('phoneAppService', ['ngResource'])
    .factory('Phone', ['$resource',
        function($resource){
            return $resource('app/data/:phoneId.json', {}, {
              query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
            });
          }]);
