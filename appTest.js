/// <reference path="angular.min.js"/>

var myApp = angular.module('myModule',[]);

myApp.controller('myController',function ($scope) {
    var employee = {
        firstName: "First Name",
        lastName: "Last Name",
        Gender: "M"
    }
    $scope.employee = employee;
});