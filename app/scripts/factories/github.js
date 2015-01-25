// app.factory('GitHub', function GitHub($http) {
//     return {
//         searchRepos: function searchRepos(query, callback) {
//             $http.get('https://api.github.com/search/repositories', { params: { q: query } })
//                 .success(function (data) {
//                     callback(null, data);
//                 })
//                 .error(function (e) {
//                     callback(e);
//                 });
//         }
//     };
// });