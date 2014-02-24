angular.module('AppD').factory('Constants', function() {
    // Public API here
    return {
        KEY_PROFILE_URL: function() {
            return "PROFILE_URL";
        },
        KEY_USER_NAME: function() {
            return "USER";
        },
        KEY_TOKEN: function() {
            return "TOKEN";
        },
        URL_Login: function(){
            return "http://demo3.appdynamics.com/controller/rest/applications/?output=JSON"
        }
        
    };
});
