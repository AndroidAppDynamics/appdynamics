var munimApp;

munimApp = angular.module("AppD",
        ['ngCookies', 'infinite-scroll', 'ngRoute', 'LocalStorageModule', 'PhoneGap']);

munimApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: WelcomeController});
        $routeProvider.when('/profile', {templateUrl: 'partials/profileScreen.html', controller: ProfileController});
        $routeProvider.when('/details', {templateUrl: 'partials/detailsScreen.html', controller: ProfileController});
        $routeProvider.when('/login', {templateUrl: 'partials/loginScreen.html', controller: ProfileController});
        $routeProvider.otherwise({redirectTo: "/"});
    }]);