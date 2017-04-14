angular.module('video-player')

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.videos = window.exampleVideoData;
      $scope.youtubeUrl = 'https://www.youtube.com/embed/';
    }],
  };
});
