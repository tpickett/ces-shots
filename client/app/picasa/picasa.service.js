'use strict';

angular.module('cesApp')
  .factory('picasa', function ($http) {
    // Public API here
    return {
      get: function () {
        return $http.get("https://picasaweb.google.com/data/feed/api/user/104429327458788610581/albumid/6237481999134830225?alt=json")
          .then((results)=>{
            console.log('got data: ', results)
            return results.data.feed.entry;
          })
      }
    };
  });
