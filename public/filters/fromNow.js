angular.module('trackApp').
  filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
});