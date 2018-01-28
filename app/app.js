'use strict';

angular.module("routeRouting", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl:"partials/home.html"
            })
            .when("/i65", {
                templateUrl: "partials/i65.html",
                controller: "i65Ctrl.js"
            })
            .when("/i40", {
                templateUrl: "partials/i40.html",
                controller: "i40Ctrl.js"
            })
            .otherwise("/");
    });
