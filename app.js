var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl : "pages/home.html"
    })

    .when('/about', {
        templateUrl : "pages/about.html"
    })

    .when('/nutrition', {
        templateUrl : "pages/nutrition.html"
    })

    .when('/fitness', {
        templateUrl : "pages/fitness.html"
    })

    .when('/cyber', {
        templateUrl : "pages/cyber.html"
    })

    .when('/technology', {
        templateUrl : "pages/technology.html"
    })

    .when('/contact', {
        templateUrl : "pages/contact.html"
    })

    .otherwise({
        redirectTo: '/'
    });
});