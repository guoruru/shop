var app = angular.module('ionicApp', ['ionic','ui.router'])
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("tab",{
            url: "/tab",
            templateUrl: "./App/View/temp/_tab.html"
        });
    $urlRouterProvider.otherwise('/tab')
});