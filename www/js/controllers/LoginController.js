'use strict';

angular.module('AppD').controller('LoginController', function($scope,$http,LoginService) {
    $scope.user = {};
    $scope.submitLogin = function() {
        LoginService.doLogin($scope.user);
    };

});
