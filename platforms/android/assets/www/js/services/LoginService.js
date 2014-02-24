'use strict';

angular.module('AppD').service('LoginService', function($http, Storage, Constants) {
    return {
        isLogin: function(loginRequired, alreadyLogin) {
            console.log("isLogin Called");
            if (Storage.get(Constants.KEY_TOKEN()) === null) {
                loginRequired();
            } else {
                alreadyLogin();
            }
        },
        doLogin: function(user) {
            var requestDTO = {};
            requestDTO.username = user.name + "@" + user.customer;
            requestDTO.password = user.password;
            console.log("requestDTO : "+JSON.stringify(requestDTO));
            $http.post(Constants.URL_Login(), requestDTO).success(function(data, status, headers, config) {
                console.log("Response " +
                        "\nData : " + JSON.stringify(data) +
                        "\nStatus : " + JSON.stringify(status) +
                        "\nHeader : " + JSON.stringify(headers) +
                        "\nConfig : " + JSON.stringify(config));
            }).error(function(data, status, headers, config) {
                console.log("Response " +
                        "\nData : " + JSON.stringify(data) +
                        "\nStatus : " + JSON.stringify(status) +
                        "\nHeader : " + JSON.stringify(headers) +
                        "\nConfig : " + JSON.stringify(config));
            });
        }
    };
});