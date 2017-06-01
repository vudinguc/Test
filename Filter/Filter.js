(function() {
    var app = angular.module('Filter',[]);

    app.controller('filterDemo', filterDemo);
    filterDemo.$inject = ['$scope'];
    function filterDemo($scope) {
        var employees = [
            {name: '1', birthD: new Date('01/06/2011'), salary: 11000, gender: 'Male', status:true},
            {name: '2', birthD: new Date('02/06/2012'), salary: 12000, gender: 'FeMale', status:false},
            {name: '3', birthD: new Date('03/06/2013'), salary: 13000, gender: 'Male', status:true},
            {name: '4', birthD: new Date('04/06/2014'), salary: 14000, gender: 'FeMale', status:false},
            {name: '5', birthD: new Date('05/06/2015'), salary: 15000, gender: 'FeMale', status:true},
            {name: '6', birthD: new Date('06/06/2016'), salary: 16000, gender: 'Male', status:false}
        ];

        $scope.employees = employees;
        $scope.limitRow = 3;
        $scope.sortColumn = 'name';
    }

    app.filter('status', function(){
       return function(input) {
           if (input == true)
               return "True";
           else
               return "False";
       }
    });
})()