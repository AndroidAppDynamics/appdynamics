'use strict';

angular.module('AppD').service('LoginService', function($http, Storage, Constants) {
    var requestHeader;
    var authorization = function(user1) {
        var username = user1.name + "@" + user1.customer;
        var password = user1.password;
        requestHeader = btoa(username + ":" + password);
        return requestHeader;
    };

    return {
        isLogin: function(loginRequired, alreadyLoggedin) {
            console.log("isLogin Called");
            if (Storage.get(Constants.KEY_APPLICATIONS) === null) {
                loginRequired();
            } else {
                alreadyLoggedin();
            }
        },
        doLogin: function(user, loginSuccess, loginFail) {
            authorization(user);
            var headers = {
                'Authorization': 'Basic ' + requestHeader
            };
            console.log("login HeaderRequest : " + JSON.stringify(headers));
            $http({method: 'get', url: Constants.URL_Login(user.profile), headers: headers}).success(function(data, status, headers, config) {
                loginSuccess(data);
            }).error(function(data, status, headers, config) {
                console.log("Response " +
                        "\nData : " + JSON.stringify(data) +
                        "\nStatus : " + JSON.stringify(status) +
                        "\nHeader : " + JSON.stringify(headers) +
                        "\nConfig : " + JSON.stringify(config));
                loginFail();
            });
        }
    };
});