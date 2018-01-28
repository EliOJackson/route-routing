'use strict';

angular.module("routeRouting").controller("i40Ctrl", function ($scope, RouteFactory) {
    RouteFactory.getRoutes()
        .then((routeData) => {
            $scope.highwayName = routeData.data.highway2.name;
            $scope.highwayDescription = routeData.data.highway2.description;
        });
});