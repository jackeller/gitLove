'use strict';

/**
 * @ngdoc function
 * @name gitLoveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitLoveApp
 */
angular.module('gitLoveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
