'use strict';

angular.module('StarCityApp')
  .controller('SignupCtrl', function ($scope,$location,$state) {
  	$scope.page = {
  		name: 'Registration'
  	}

    $scope.getStarsForm = function() {
    	$state.go('preLogin.stars-form');
    	
    }

    $scope.getStarMakersForm = function() {
    	$state.go('preLogin.starMakers-form');
    	
    }

    



  });
