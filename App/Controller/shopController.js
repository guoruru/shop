app.controller("tabController", ['$scope', 'baseServer', function ($scope,baseServer) {
    baseServer.ajax("get", "http://localhost:8090/?data").then(function (result) {
        $scope.shopInfo = result;
    });
}]);