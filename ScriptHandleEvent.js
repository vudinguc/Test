/**
 * Created by nguyenthinhkhang on 01/06/2017.
 */
var app = angular.module('handleEvent',[]);
app.controller('handleEventController',['$scope',function($scope) {
    var technology = [
        {Name: "C#", Like: 0, Minus: 0, Dislike: 0},
        {Name: "Java", Like: 0, Minus: 0, Dislike: 0},
        {Name: "Net", Like: 0, Minus: 0, Dislike: 0},
        {Name: "SQL", Like: 0, Minus: 0, Dislike: 0}
    ];
    $scope.technology = technology;
    $scope.increaseLike = function(technologies){
        technologies.Like++;
        technologies.Minus = technologies.Like - technologies.Dislike;
    }
    $scope.increaseDislike = function(technologies){
        technologies.Dislike++;
        technologies.Minus = technologies.Like - technologies.Dislike;
    }
}]);