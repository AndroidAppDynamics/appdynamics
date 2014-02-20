'use strict';

angular.module('AppD')
        .service('TestService', function TestService() {
            return {
                getAllBlog: function(onSuccess) {
                    onSuccess();
                }
            };
        });

