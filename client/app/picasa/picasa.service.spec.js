'use strict';

describe('Service: picasa', function () {

  // load the service's module
  beforeEach(module('cesApp'));

  // instantiate service
  var picasa;
  beforeEach(inject(function (_picasa_) {
    picasa = _picasa_;
  }));

  it('should do something', function () {
    expect(!!picasa).toBe(true);
  });

});
