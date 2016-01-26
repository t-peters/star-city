'use strict';

describe('Controller: SignupFormCtrl', function () {

  // load the controller's module
  beforeEach(module('StarCityApp'));

  var SignupFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupFormCtrl = $controller('SignupFormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
