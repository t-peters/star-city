'use strict';

angular.module('StarCityApp')
  .controller('SignupFormCtrl', function ($scope,$state) {
    $scope.backToSignUp = function() {
    	$state.go('preLogin.signup.view');
    }


    $scope.formFields = function(data) {
    	console.log(data);
    }
  });
