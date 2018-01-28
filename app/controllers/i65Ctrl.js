'use strict';

angular.module("routeRouting").controller("i65Ctrl", function ($scope, RouteFactory) {
    RouteFactory.getRoutes()
        .then((routeData) => {
            console.log(routeData);
            // $scope.allRoutes = routeData.data;

        });
});