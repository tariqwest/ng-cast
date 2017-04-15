angular.module('video-player')
.service('youTube', ['$http', function($http){
  this.search = function(options, callback){
    var data = {
      part: 'snippet', 
      videoEmbeddable: 'true', 
      type: 'video',
      key: options.key, 
      q: options.query, 
      maxResults: options.max
    };    
    console.log(data);
    $http({
      url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + options.max + "&key=" + options.key + "&q=" + options.query,
      method: "GET",
      //data: data
    }).then(function successCallback(response) {
      console.log(response);
      callback(response.data.items);
      //$scope.currentVideo = response.data.items[0];

    }, function errorCallback(response) {
      console.log(response, callback);
    });
  };

}]);