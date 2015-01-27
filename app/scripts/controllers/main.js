'use strict';

/**
 * @ngdoc function
 * @name gitLoveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitLoveApp
 */
angular.module('gitLoveApp')

.factory('mainFactory', function($http) {
    return {
        getAllRepos: function getAllRepos(callback) {
            $http.get('https://api.github.com/repositories', {
                })
                .success(function(data) {
                    callback(null, data);
                })
                .error(function(e) {
                    callback(e);
                });
        }
    };
})

.controller('MainCtrl', function($scope, mainFactory) {

    $scope.getAllRepos = function getAllRepos() {
        mainFactory.getAllRepos(function(error, data) {
            if (!error) {
                $scope.data = data;
            }
        });
    };

    $scope.getAllRepos();

  });
