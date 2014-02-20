
'use strict';

angular.module('AppD')
        .controller('MainController', function($rootScope, $scope,
                $http, $routeParams, $location, $cookies, $route, $window, PhoneGap) {
            $scope.headerName = "AppDynamics";
            $scope.alertToastText = "";

            $('#alertToast').show();
            $scope.showAlertToast = function(data, status) {
                if (status == "success")
                    $('#alertToast').css({'color': 'darkgreen', 'background-color': 'lightgreen', 'font-size': '150%'});
                else if (status == "danger")
                    $('#alertToast').css({'color': 'red', 'background-color': 'pink', 'font-size': '150%'});
                else {
                    $('#alertToast').css({'color': 'darkbule', 'background-color': 'lightblue', 'font-size': '150%'});
                }
                $('#alertToast').fadeIn(3000);
                setTimeout(function() {
                    $('#alertToast').fadeOut(3000);
                }, 10);
                $scope.alertToastText = data;
            }

            $('#navigation-menu').hide();
            $scope.toggleMenu = function(path) {
                $window.history.go(-$window.history.length);
                $('#navigation-menu').toggle("slide");
                $location.path(path);
            };
            PhoneGap.ready().then(function() {
                console.log("PhoneGap ready");
            });
        });