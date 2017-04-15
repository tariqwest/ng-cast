angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    templateUrl: 'src/templates/videoListEntry.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){},
    scope: {
      video: '<',
      onClick: '<'
    }
  };
});
