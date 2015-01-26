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
        searchRepos: function searchRepos(repoID, callback) {
            $http.get('https://api.github.com/search/repositories', {
                    params: {
                        q: repoID
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

.controller('RepoCtrl', function($scope, $routeParams, $location, $timeout, repoFactory) {

    $scope.getFactoryData = function getFactoryData() {
        repoFactory.searchRepos( $routeParams.repoID, function(error, data) {
            if (!error) {
                $scope.repos = data.items;
            }
        });
    };

    // Initialize the search as long as we are not on a blank search
    if ( $routeParams.repoID !== '' ) {
        $scope.getFactoryData();    
    }

    // Changes the route
    $scope.changeURL = function changeURL(base, param) {
        if (param) {
            $location.path('/' + base + '/' + param);
        } else {
            $location.path('/' + base);
        }
    };

});




