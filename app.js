var app = angular.module('App', ['ngRoute']);


    app.config(function($routeProvider){
        $routeProvider
        .when("/NewEvent",{
            templateUrl : "template/add_event.html",
            controller: "AddEventController"
        })
        .when("/DisplayEvent", {
            templateUrl: "template/show_event.html",
            controller: "ShowDisplayController"
        })
        .otherwise ({
            redirectTo: '/DisplayEvent'
        });
    });


    app.controller('ListMaker', function($scope) {
        $scope.students = [
            { "name" : "seungju" },
            { "name" : "woojin" }
        ];
    });


    app.controller("AddEventController", function($scope) {
        $scope.message = "This is to Add a new Event";
    });
    

    app.controller("ShowDisplayController",function($scope){
        $scope.message = "This is display an Event";
    });


    app.controller("ValueIndicator" , function($scope){
        $scope.a = 2;
        $scope.b = 3;
        $scope.value = $scope.$eval('a+b')
    });


    app.controller("FilterRoundOff" , function($scope){
        $scope.pi = 3.141592;
    });


    app.filter('CustomFilter',function(){
        return function(input)
        {
            return "Hello, " + input
        }
    });


    app.controller("DemoController",function($scope){

        $scope.developer ="seungju";
     });





    
