angular.module('video-player')

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.videos = window.exampleVideoData;
      this.youtubeUrl = 'https://www.youtube.com/embed/';
    },
  };
});
