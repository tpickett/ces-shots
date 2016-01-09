'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Cool gadgets',
    'state': 'main'
  },{
    'title': 'Random People',
    'state': 'people'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('cesApp')
  .controller('NavbarController', NavbarController);
