'use strict';

var notesServices = angular.module('notesServices', ['ngResource']);

var host = "http://localhost:8080/";

notesServices.factory('profileService', 
	[
		'$resource',

	  	function($resource) {
		    return $resource(host + 'user/' + id, {}, {
		      query: {method:'GET', params:{}, isArray:false }
	    	});
  		}
  	]
);
  