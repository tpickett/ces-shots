'use strict';

describe('Service: cesPicasa', function () {

  // load the service's module
  beforeEach(module('cesApp'));

  // instantiate service
  var cesPicasa;
  beforeEach(inject(function (_cesPicasa_) {
    cesPicasa = _cesPicasa_;
  }));

  it('should do something', function () {
    expect(!!cesPicasa).toBe(true);
  });

});
