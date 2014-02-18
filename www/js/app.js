var munimApp;

munimApp = angular.module("AppD",
        ['ngCookies', 'angular-flash.flash-alert-directive', 'infinite-scroll', 'ngRoute', 'LocalStorageModule', 'PhoneGap']);

munimApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: WelcomeController});
        $routeProvider.when('/firstScreen', {templateUrl: 'partials/firstScreen.html', controller: FirstController});
        $routeProvider.otherwise({redirectTo: "/"});
    }]);