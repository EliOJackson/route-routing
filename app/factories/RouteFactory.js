'use strict';

angular.module("routeRouting").factory("RouteFactory", function ($q, $http) {

    let getRoutes = () => {
        return $q((resolve, reject) => {
            $http
                .get("../data/routes.json")
                .then((routes) => {
                    resolve(routes);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    return { getRoutes };
});