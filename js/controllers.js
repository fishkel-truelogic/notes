'use strict';

var notesControllers = angular.module('notesControllers', []);

notesControllers.controller('homeCtrl', 
	[
		'$scope',

		function($scope) {
		/*
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
		*/
		$scope.test = "chupala gato";
		}
	]
);

notesControllers.controller('profileCtrl', 
	[
		'$scope',

		function($scope) {
		/*
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
		*/
		}
	]
);