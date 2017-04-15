angular.module('video-player')

.controller('VideoPlayerController', function($scope){
  


})

.directive('app', ['youTube', function() {
  return {

    templateUrl: 'src/templates/app.html',

    restrict: 'E',
    
    controllerAs: 'ctrl',
    
    bindToController: true,

    controller: function(youTube) {

      this.searchInput = 'cats';
      
      this.searchResults = function(videos){
        this.videos = videos;
        this.currentVideo = videos[0];
      };

      this.search = function(){
        console.log(this.searchInput);
        youTube.search({
          'key': window.YOUTUBE_API_KEY,
          'query': this.searchInput,
          'max': 5
        }, this.searchResults.bind(this));
      };
      
      this.videos = window.exampleVideoData;
      
      //this.youtubeUrl = 'https://www.youtube.com/embed/';
      
      this.currentVideo = this.videos[0];
      
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };

      this.search();
    },

  };
}]);