angular.module('video-player')
.directive('videoPlayer', function() {
  return {
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs: 'ctrl',
    bindToController: true,
    //controller: 'VideoPlayerController'
  };
});
