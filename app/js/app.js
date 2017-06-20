(function () {
  'use strict';
  var path = "./app/pages/";
  var app = angular.module('app',['app.controllers', 'app.services', 'ngRoute','ngAnimate'])
  .run(function($rootScope, $location) {
    if ((typeof stash.get('appID') == "undefined") && (typeof stash.get('apiKey') == "undefined")) {
      $location.url('/register');
    }
    $rootScope.register = function() {
      $location.url('/register');
    };
    $rootScope.homepage = function() {
      $location.url('/');
    }
  })
  .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: path+'home.html',
          controller: 'homeCtrl'
        })
        .when("/register", {
          templateUrl : path+"register.html",
          controller: 'regCtrl'
        })
        .when("/green", {
          templateUrl : path+"green.html"
        })
        .when("/blue", {
          templateUrl : path+"blue.html"
        });
        $routeProvider.otherwise({redirectTo: '/'});
      }
    ]
  );
})();
