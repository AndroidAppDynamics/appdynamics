'use strict';

angular.module('AppD').controller('LoginController', function($window, $scope, LoginService, Storage,Constants) {
    $scope.user = {};
    $scope.$parent.headerName = "Login";
    $scope.submitLogin = function() {
        LoginService.doLogin($scope.user, loginSuccess, loginFail);
    };
    function loginSuccess(data) {
        console.log("login Success");
        Storage.add(Constants.KEY_APPLICATIONS, data);
        var apps = Storage.get(Constants.KEY_APPLICATIONS);
        console.log("Response " +
                "\nData : " + JSON.stringify(apps));
        $window.history.back();
    }
    function loginFail() {
        console.log("login Fail");
    }

});
