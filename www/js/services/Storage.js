angular.module('AppD').factory('Storage', function(localStorageService) {
    return {
        get: function(key) {
            return localStorageService.get(key);
        },
        add: function(key, value) {
            return localStorageService.add(key, value);
        }
    };
});