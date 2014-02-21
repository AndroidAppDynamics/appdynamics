'use strict';

angular.module('AppD', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'PhoneGap',
    'LocalStorageModule'
    
])
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'partials/welcome.html',
                        controller: 'WelcomeController'})
                    .when('/profile', {
                        templateUrl: 'partials/profileScreen.html',
                        controller: 'ProfileController'})
                    .when('/details', {
                        templateUrl: 'partials/detailsScreen.html',
                        controller: 'DetailsController'})
                    .when('/login', {
                        templateUrl: 'partials/loginScreen.html',
                        controller: 'LoginController'})
                    .otherwise({
                        redirectTo: '/'
                    });
        });
