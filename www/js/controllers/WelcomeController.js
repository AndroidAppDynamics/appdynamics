'use strict';
angular.module('AppD').controller('WelcomeController', function($location,LoginService) {
    LoginService.isLogin(loginRequired, alreadyLogin);
    function loginRequired() {
        console.log("welcomeController LoginRequired");
        $location.path("\login");
    }
    function alreadyLogin() {
        console.log("welcomeController alreadyLogin");
    }

});

