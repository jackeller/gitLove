'use strict';

/**
 * @ngdoc function
 * @name gitLoveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gitLoveApp
 */
angular.module('gitLoveApp')

.factory('dataFactory', function($http) {
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

.controller('AboutCtrl', function($scope, dataFactory) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.executeSearch = function executeSearch() {
        dataFactory.searchRepos($scope.query, function(error, data) {
            if (!error) {
                $scope.repos = data.items;
            }
        });
    }

});
