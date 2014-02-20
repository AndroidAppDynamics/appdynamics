
'use strict';

angular.module('AppD')
        .controller('WelcomeController', function(TestService) {
            TestService.getAllBlog(function() {
                alert("Hiiiiiii");
            });
        });

