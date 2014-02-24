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
        KEY_APPLICATIONS: function() {
            return "APPLICATIONS";
        },
        URL_Login: function(profileName){
            return ' http://ec2-204-236-200-233.compute-1.amazonaws.com/controller/rest/applications/?output=JSON';
//            return "http://"+profileName+"."+baseURL+"controller/rest/applications/?output=JSON"
        }
        
    };
});
