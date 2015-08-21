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
		}
	]
);

notesControllers.controller('profileCtrl', 
	[
		'$scope',

		function($scope) {
		}
	]
);

notesControllers.controller('optionsCtrl', 
	[
		'$scope',

		function($scope) {
		}
	]
);

notesControllers.controller('noteListCtrl', 
	[
		'$scope',

		function($scope) {

			$scope.notes = [1,2,3,4,5,6];
		
		}
	]
);

