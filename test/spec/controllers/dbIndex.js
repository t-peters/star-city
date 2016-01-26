'use strict';

describe('Controller: DbindexCtrl', function () {

  // load the controller's module
  beforeEach(module('StarCityApp'));

  var DbindexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DbindexCtrl = $controller('DbindexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
