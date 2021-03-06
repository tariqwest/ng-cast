angular.module('video-player')
.directive('search', function() {
  return {
    templateUrl: 'src/templates/search.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){},
    scope: {
      searchInput: '=',
      searchByEnterKeyPress: '=',
      search: '=',
      result: '=',
      videos: '=',
      currentVideo: '='
    }
  };
});
