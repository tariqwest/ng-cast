angular.module('video-player')

.controller('VideoPlayerController', function($scope){
  


})

.directive('app', ['youTube', function() {
  return {
    templateUrl: 'src/templates/app.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      this.searchInput = '';
      this.search = function(){
        console.log(this.searchInput);
        youTube.search({
          'key': window.YOUTUBE_API_KEY,
          'query': this.searchInput,
          'max': 5
        }, this);
      };
      this.videos = youTube.search({
        'key': window.YOUTUBE_API_KEY,
        'query': 'cats',
        'max': 5
      }, this); //window.exampleVideoData;
      this.youtubeUrl = 'https://www.youtube.com/embed/';
      this.currentVideo = null;
      this.setCurrentVideo = function(video) {
        this.currentVideo = video;
      };
    },

  };
}]);