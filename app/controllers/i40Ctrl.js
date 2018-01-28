'use strict';

angular.module("routeRouting").controller("i40Ctrl", function ($scope, RouteFactory) {
    RouteFactory.getRoutes()
        .then((routeData) => {
            console.log(routeData);
            // $scope.allRoutes = routeData.data;

        });
});