'use strict';

angular.module("routeRouting").controller("RouteCtrl", function ($scope, RouteFactory) {
    RouteFactory.getRoutes()
        .then((routeData) => {
            $scope.allRoutes = routeData.data;

        });
});