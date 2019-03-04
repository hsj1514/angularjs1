var app = angular.module('App', ['ngRoute']);


    app.config(function($routeProvider){
        $routeProvider
        .when("/Page1", {
            templateUrl : "template/page1.html",
            controller: "Page1Controller"
        })
        .when("/Page2", {
            templateUrl: "template/page2.html",
            controller: "Page2Controller"
        })
        .otherwise ({
            redirectTo: '/Page1'
        });
    });


    app.controller('ListMaker', function($scope) {
        $scope.students = [
            { "name" : "seungju" },
            { "name" : "woojin" }
        ];
    });


    app.controller("Page1Controller", function($scope) {
        $scope.message = "첫 번째 페이지입니다.";
    });
    

    app.controller("Page2Controller",function($scope){
        $scope.message = "두 번째 페이지입니다.";
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


    app.controller("FilterCtrl",function($scope){

        $scope.developer ="seungju";
     });


     app.directive('pane',function(){
        return {
            transclude : true,
            scope : {title:'@'},
            templateUrl : "template/box.html"  
        };
    });