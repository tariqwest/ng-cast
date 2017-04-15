angular.module('video-player')
.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){},
    scope: {
      videos: '<',
      onClick: '<',
      currentVideo: '=',
    }
  };
});
