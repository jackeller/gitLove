'use strict';

/**
 * @ngdoc function
 * @name gitLoveApp.controller:repoCtrl
 * @description
 * # repoCtrl
 * Controller of the gitLoveApp
 */
angular.module('gitLoveApp')

.factory('repoFactory', function($http) {
    return {
        searchRepos: function searchRepos(query, callback) {
            $http.get('https://api.github.com/search/repositories', {
                    params: {
                        q: query
                    }
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

.controller('RepoCtrl', function($scope, repoFactory) {

    $scope.executeSearch = function executeSearch() {
        repoFactory.searchRepos($scope.query, function(error, data) {
            if (!error) {
                $scope.repos = data.items;
            }
        });
    }

});
