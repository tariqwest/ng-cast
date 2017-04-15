angular.module('video-player')
.directive('videoPlayer', function() {
  return {
    templateUrl: 'src/templates/videoPlayer.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){},
    scope: {
      video: '='
    }
  };
});
