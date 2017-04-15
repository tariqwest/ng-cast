angular.module('video-player')

.controller('VideoPlayerController', function($scope){
  


})

.directive('app', ['youTube', function() {
  return {

    templateUrl: 'src/templates/app.html',

    restrict: 'E',

    controllerAs: 'ctrl',
    
    bindToController: true,

    scope: {
      
    },

    controller: function(youTube) {

      this.searchInput = 'cats';

      this.videos = window.exampleVideoData;
            
      this.currentVideo = this.videos[0];
      
      this.searchResults = function(videos){
        this.videos = videos;
        this.currentVideo = videos[0];
      };

      this.search = function(callback){
        youTube.search({
          'key': window.YOUTUBE_API_KEY,
          'query': this.searchInput,
          'max': 5
        }, callback.bind(this));
      };

      this.searchByEnterKeyPress = function(keyEvent, callback) {
        // Enter key is # 13
        if (keyEvent.which === 13){
          this.search(callback);
        }
      };
      
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };

      this.search(this.searchResults);
    },

  };
}]);