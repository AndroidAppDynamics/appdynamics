angular.module('AppD').factory('Constants', function() {
    var baseURL = "appdynamics.com/";
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
        URL_Login: function(profileName){
            return "http://"+profileName+"."+baseURL+"controller/rest/applications/?output=JSON"
        }
        
    };
});
