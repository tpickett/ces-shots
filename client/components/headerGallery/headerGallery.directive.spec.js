'use strict';

describe('Directive: headerGallery', function () {

  // load the directive's module and view
  beforeEach(module('cesApp'));
  beforeEach(module('directives/headerGallery/headerGallery.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<header-gallery></header-gallery>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the headerGallery directive');
  }));
});
