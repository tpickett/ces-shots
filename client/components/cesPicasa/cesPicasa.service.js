'use strict';

angular.module('cesApp')
  .service('cesPicasa', function (picasa) {
    class picasaService {
    	constructor(){
    		this.albums = {};
    	}
    	init(){
    		picasa.get()
    			.then((results)=>{
    				console.log('initializing', results)
    				this.albums = results;
    			});
    	}
    }

    return new picasaService;
  });
