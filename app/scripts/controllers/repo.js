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

    console.log("hi");

    $scope.getFactoryData = function getFactoryData() {
        repoFactory.searchRepos( $routeParams.repoID, function(error, data) {
            if (!error) {

                console.log("retrieved data successfully");
                $scope.repos = data.items;

                console.log("Here is the first repo");
                console.log( $scope.repos[0] );
            }
        });
    }

    // Initialize the search as long as we are not on a blank search
    if ( $routeParams.repoID !== "" ) {
        $scope.getFactoryData();    
    }

    // Changes the route
    $scope.changeURL = function changeURL(base, param) {
        if (param) {
            console.log("change URL 1");
            $location.path('/' + base + '/' + param);
        } else {
            console.log("change URL 2");
            $location.path('/' + base);
        }
    }   

});




