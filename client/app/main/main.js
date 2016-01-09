'use strict';

angular.module('cesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
        	init: (cesPicasa)=>{
        		return cesPicasa.init();
        	}
        }
      });
  });
