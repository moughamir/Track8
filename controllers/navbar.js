angular.module('trackApp')
  .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  }]);