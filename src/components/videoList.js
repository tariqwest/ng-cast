angular.module('video-player')
.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html',
    controller: ['$scope', '$http', function($scope, $http) {
      //$scope.video = $scope.videos[0];
    }],
  };
});
