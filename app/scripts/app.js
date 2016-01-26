'use strict';


  angular.module('StarCityApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //console.log($stateProvider);

    $stateProvider

    .state('dashboard', {
      url: "/dashboard",
      abstract: true,
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('dashboard.dbIndex', {
      url: '/index',
      views : {
        'DashboardView' : {
          templateUrl: 'views/dbIndex.html',
          controller: 'DbindexCtrl'
        }
      }
      
    })
    .state('home', {
      url:'/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('preLogin', {
      url: '/processing-user',
      abstract: true,
      templateUrl: 'views/PreLogin.html',
      controller: 'PreloginCtrl'
    })
    .state('preLogin.signin', {
      abstract: true,
      url: '/signin',
      views: {
        'PreLogin': {
          templateUrl: 'views/signup.html',
          controller: 'SigninCtrl'
        }
      }
      
    })
    .state('preLogin.signin.view', {
      url: '/page',
      views: {
        'starsView': {
          templateUrl: 'views/stars-signin-form.html',
          controller: 'SigninCtrl'
        },
        'starMakersView': {
          templateUrl: 'views/starsMakers-signin-form.html',
          controller: 'SigninCtrl'
        }
      }
      
    })
    .state('preLogin.signup', {
      abstract: true,
      url: '/signup',
      views: {
        'PreLogin': {
           templateUrl: 'views/signup.html',
           controller: 'SignupCtrl'
        }
      }
     
    })

    .state('preLogin.signup.view', {
      url: '/page', 
      views: {
        'starsView': {
           templateUrl: 'views/stars-cont.html',
           controller: 'SignupFormCtrl'
        },
        'starMakersView': {
           templateUrl: 'views/starMakers-cont.html',
           controller: 'SignupFormCtrl'
        }
      }
     
    })
    .state('preLogin.stars-form', {
      url: '/stars/registration-form', 
      views: {
        'PreLogin': {
           templateUrl: 'views/stars-form.html',
           controller: 'SignupFormCtrl'
        }
      }
     
    })
    .state('preLogin.starMakers-form', {
      url: '/star-makers/registration-form', 
      views: {
        'PreLogin': {
           templateUrl: 'views/starMakers-form.html',
           controller: 'SignupFormCtrl'
        }
      }
     
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      });
      
  })




