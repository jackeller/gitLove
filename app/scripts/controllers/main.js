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
        getCurrentUser: function getCurrentUser(query, callback) {
            $http.get('https://api.github.com/user', {
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

    $scope.executeSearch = function executeSearch() {
        mainFactory.getCurrentUser($scope.query, function(error, data) {
            if (!error) {
                $scope.data = data;
            } else {
                $scope.data = data;
            }
        });
    }

  });
