function MainController($rootScope, $scope,
        $http, $routeParams, $location, $cookies, flash, $route, $window, PhoneGap) {
    $scope.headerName = "Your Personal Accountant";
    $scope.database;
    $scope.alertToastText = "";
    $scope.selectedGroup;
    $scope.selectedCategory;
    $scope.selectedUser;
    $scope.database = window.openDatabase("Database", "1.0", "munim", 5 * 1024 * 1024);

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
//        generateDB();
    });
    generateDB();
//    dropTables();
    function generateDB() {
        console.log("Database Ready");
        $scope.database.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS USER (name varchar(50) unique, email varchar(50) unique, primary key(email) )');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS CATEGORY (name varchar(50) unique primary key)');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS MY_GROUP (name varchar(50) unique primary key)');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS USER_GROUP (id primary key unique, user_email int , group_name int not null, FOREIGN KEY (user_email) REFERENCES USER(email), FOREIGN KEY (group_name) REFERENCES MY_GROUP(name))');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
    }
    function dropTables() {
        $scope.database.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS USER');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CATEGORY');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS MY_GROUP');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
        $scope.database.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS USER_GROUP');
        }, $scope.errorQueryExe, $scope.showSuccessQuery);
    }


    // Transaction success callback
    //
    $scope.showSuccessQuery = function() {
        //        $scope.$parent.showAlertToast("Successfully Done", "success");
        console.log("showSuccessQuery");
    };
    // Transaction error callback
    //
    $scope.errorQueryExe = function(tx, err) {
        alert("Error in execution query : " + JSON.stringify(err));
        switch (err.code) {
            case 1:
                {
                    $scope.showAlertToast("Please make valid entry", "danger");
                    break;
                }
            case 2:
                {
                    $scope.showAlertToast("DataBase version changed", "danger");
                    break;
                }
            case 3:
                {
                    $scope.showAlertToast("Too big data.", "danger");
                    break;
                }
            case 4:
                {
                    $scope.showAlertToast("Database is overflow, Please sync to main server.", "danger");
                    break;
                }
            case 5:
                {
                    $scope.showAlertToast("Database error.", "danger");
                    break;
                }
            case 6:
                {
                    $scope.showAlertToast("Entry already exists", "danger");
                    break;
                }
            case 7:
                {
                    $scope.showAlertToast("Database connection timeout.", "danger");
                    break;
                }
            default:
                {
                    $scope.showAlertToast("Please make valid entry", "danger");
                    break;
                }
        }
    };
}
;