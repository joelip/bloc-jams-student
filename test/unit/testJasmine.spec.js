'use strict';
require('scripts/app');

describe('Landing Controller behavior', function () {

  var scope;

  beforeEach(module('BlocJams'));

  beforeEach(inject(function($rootScope, $controller, $state) {

    scope = $rootScope.$new();

    $controller('Landing.controller', {$scope: scope});

  }));

  // test starts here
  it('should contain the string "Turn the music up!"', function () {
    expect(scope.subText).toBe("Turn the music up!");
    // console.log("This is scope.subtext " + scope.subText);
  });

  it("should have a working function called 'subTextClicked'", function() {
    expect(scope.subTextClicked).toBeDefined();
    // console.log("Subtext clicked is " + scope.subTextClicked);
  });

  it("should have an array of 21 album placeholders", function() {
    expect(scope.albumURLs.length).toEqual(21);
    // console.log(scope.albumURLs);
  });

  it("should have a function defined on scope called 'moveImage'", function() {
    expect(scope.moveImage).toBeDefined();
  });
  
});