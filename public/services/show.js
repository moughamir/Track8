angular.module('trackApp')
  .factory('Show', ['$resource', function($resource) {
    return $resource('/api/shows/:_id');
}]);