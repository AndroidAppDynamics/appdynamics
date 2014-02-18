function WelcomeController($rootScope, $scope, $http, $routeParams, $location, $cookies, flash, $route, $window) {
    $scope.changePage = function(){
        $location.path('/firstScreen');
    };
}
