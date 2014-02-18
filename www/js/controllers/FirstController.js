function FirstController($rootScope, $scope, $http, $routeParams, $location, $cookies, flash, $route, $window) {
    $scope.changePage = function(){
        $location.path('/');
    };
}
