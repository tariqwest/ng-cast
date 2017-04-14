angular.module('video-player')
.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html',
    controllerAs: 'ctrl',
    bindToController: true
  };
});
