'use strict';

var notesApp = angular.module('notesApp', [
  'ngRoute',
  'notesControllers',
  'notesServices'
]);

notesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl:'partials/home.html',
        controller: 'homeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);