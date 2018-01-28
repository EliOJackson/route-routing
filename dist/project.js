//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"home.html"
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
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

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data;
              $scope.highwayDescriptoion = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.name;
              $scope.highwayDescriptoion = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.name;
              $scope.highwayDescriptoion = routeData.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.name;
              $scope.highwayDescriptoion = routeData.data.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.name;
              $scope.highwayDescriptoion = routeData.data.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescriptoion = routeData.data.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescriptoion = routeData.data.highway1.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log(routeData);
              // $scope.allRoutes = routeData.data;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescription = routeData.data.highway1.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway2.name;
              $scope.highwayDescription = routeData.data.highway2.description;
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              console.log("i65", routeData);
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescription = routeData.data.highway1.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway2.name;
              $scope.highwayDescription = routeData.data.highway2.description;
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescription = routeData.data.highway1.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway2.name;
              $scope.highwayDescription = routeData.data.highway2.description;
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescription = routeData.data.highway1.description;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));



//====================================================================================================================
// Module:    routeRouting
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl:"partials/home.html"
              })
              .when("/i65", {
                  templateUrl: "partials/i65.html",
                  controller: "i65Ctrl"
              })
              .when("/i40", {
                  templateUrl: "partials/i40.html",
                  controller: "i40Ctrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i40Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i40Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway2.name;
              $scope.highwayDescription = routeData.data.highway2.description;
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/i65Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("i65Ctrl", function ($scope, RouteFactory) {
      RouteFactory.getRoutes()
          .then((routeData) => {
              $scope.highwayName = routeData.data.highway1.name;
              $scope.highwayDescription = routeData.data.highway1.description;
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/RouteFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("RouteFactory", function ($q, $http) {

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

}) (angular.module ('routeRouting', ['ngRoute']));


