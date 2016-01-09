'use strict';

angular.module('cesApp')
  .directive('headerGallery', function () {
    return {
      templateUrl: 'components/headerGallery/headerGallery.html',
      restrict: 'EA',
      controller: ($scope, cesPicasa)=>{
	      	$scope.$watch(() => {
				return cesPicasa.albums;
			}, (newVal, oldVal) => {
				$scope.albums = _.map(newVal, (item)=>{
					console.log(item)
					return {
						id: item.gphoto$id.$t,
						img: item.media$group.media$content[0].url,
						width: item.media$group.media$content[0].width,
						height: item.media$group.media$content[0].height,
						th:{
							src: item.media$group.media$thumbnail[2].url,
							// zoom_src: "",
							zoom_factor: 1.5,
							width: item.media$group.media$thumbnail[2].width,
							height: item.media$group.media$thumbnail[2].height
						}
					}
				})
			});
      },
      link: function (scope, element, attrs) {
		// PhotoWall.init({
	 //        el:             '#gallery',              // Gallery element
	 //        zoom:          true,                    // Use zoom
	 //        zoomAction:    'mouseenter',             // Zoom on action
	 //        zoomTimeout:   500,                      // Timeout before zoom
	 //        zoomDuration:  100,                      // Zoom duration time
	 //        showBox:       true,                     // Enavle fullscreen mode
	 //        showBoxSocial: true,                     // Show social buttons
	 //        padding:       10,                       // padding between images in gallery
	 //        lineMaxHeight: 150                      // Max set height of pictures line
	 //                                                 // (may be little bigger due to resize to fit line)
	 //    });
			// element.empty();
      	scope.$watch(() => {
			return scope.albums;
		}, (newVal, oldVal) => {
			_.forEach(newVal, (item)=>{
				element.append("<a href='"+item.img+"'><img src='"+item.th.src+"'</a>")
			})
			// PhotoWall.load(scope.albums)
		});
      }
    };
  });