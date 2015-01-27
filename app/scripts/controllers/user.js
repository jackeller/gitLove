'use strict';

/**
 * @ngdoc function
 * @name gitLoveApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the gitLoveApp
 */
angular.module('gitLoveApp')

.factory('userFactory', function($http) {
    return {
        getCurrentUser: function getCurrentUser(userID, callback) {
            $http.get('https://api.github.com/users/' + userID, {})
                .success(function(data) {
                    callback(null, data);
                })
                .error(function(e) {
                    callback(e);
                });
        },

        getUserRepos: function getUserRepos(reposURL, callback) {
            $http.get(reposURL, {})
                .success(function(data) {
                    callback(null, data);
                })
                .error(function(e) {
                    callback(e);
                });
        }
    };
})

.controller('UserCtrl', function($scope, $routeParams, $location, userFactory) {

    $scope.user = $routeParams.userID || 'Search for a user';
    $scope.repos = "";

    $scope.paramPassed = $routeParams.userID || "";

    $scope.executeSearch = function executeSearch() {

        userFactory.getCurrentUser($routeParams.userID, function(error, data) {
            if (!error) {
                $scope.data = data;

                userFactory.getUserRepos( data.repos_url, function(error, data) {

                    if ( !error ) {
                        $scope.repos = data;
                    }

                });
            }

        });
    };

    // There's probably a cleaner way to trigger this on load.
    $scope.executeSearch();

    $scope.changeURL = function changeURL(base, param) {
        if (param) {
            $location.path('/' + base + '/' + param);
        } else {
            $location.path('/' + base);
        }
    };

});
