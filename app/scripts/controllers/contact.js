'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('ContactCtrl', function ($rootScope, $scope) {
    $rootScope.tab = 2;
	$scope.user = {
		name:'',
		email: '',
		comment: ''
	};
	$scope.submitForm = function(formState){
		if(formState){
			alert('Form submitted successfully.');
		}else{
			alert('Please fill both name and mailId.');
		}
	}
});
