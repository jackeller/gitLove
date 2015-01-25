'use strict';

/**
 * @ngdoc overview
 * @name gitLoveApp
 * @description
 * # gitLoveApp
 *
 * Main module of the application.
 */
angular
  .module('gitLoveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/:userID', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/repo', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      })
      .when('/repo/:repoID', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
