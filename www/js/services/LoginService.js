'use strict';

angular.module('AppD').service('LoginService', function($http, Storage, Constants) {
    var requestHeader;
    var bearerToken = function() {
        var consumerKey = encodeURIComponent('****');
        var consumerSecret = encodeURIComponent('****');
        var tokenCredentials = btoa(consumerKey + ':' + consumerSecret);
        return tokenCredentials;
    };
    var authorization = function(user1) {
        var username = user1.name + "@" + user1.customer;
        var password = user1.password;
//        requestHeader = "'username':'" + username + "','password':'" + password + "'";
        requestHeader = 'dXNlcjFAY3VzdG9tZXIxOnU1ZXJAcHBkeQ==';
//        return btoa(requestHeader);
    };

    return {
        isLogin: function(loginRequired, alreadyLoggedin) {
            console.log("isLogin Called");
            if (Storage.get(Constants.KEY_TOKEN()) === null) {
                loginRequired();
            } else {
                alreadyLoggedin();
            }
        },
        doLogin: function(user) {
            authorization(user);
            var headers = {
                'Authorization': 'Basic ' + requestHeader
            };
            console.log("login HeaderRequest : " + JSON.stringify(headers));
            $http({method: 'post', url: Constants.URL_Login(user.profile), headers: headers}).success(function(data, status, headers, config) {
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