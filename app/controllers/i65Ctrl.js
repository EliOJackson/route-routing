'use strict';

angular.module("routeRouting").controller("i65Ctrl", function ($scope, RouteFactory) {
    RouteFactory.getRoutes()
        .then((routeData) => {
            $scope.highwayName = routeData.data.highway1.name;
            $scope.highwayDescription = routeData.data.highway1.description;
        });
});