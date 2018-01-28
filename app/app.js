'use strict';

angular.module("routeRouting", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/routes.html",
                controller: "RouteCtrl"
            })
            .otherwise("/");
    });
