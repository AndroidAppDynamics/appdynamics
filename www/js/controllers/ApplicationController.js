'use strict';
angular.module('AppD').controller('ApplicationController', function($location,LoginService) {
    LoginService.isLogin(loginRequired, alreadyLogin);
    function loginRequired() {
        console.log("ApplicationController LoginRequired");
        $location.path("\login");
    }
    function alreadyLogin() {
        console.log("ApplicationController alreadyLogin");
    }

});

