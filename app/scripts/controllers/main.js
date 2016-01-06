'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl', function ($rootScope, $scope, productService) {
	$rootScope.tab = 1;
	$scope.heading = 'Summary';
	$scope.description = 'This is a sample page to show the main categories of products. You can also search the product on the basis of any of the attribute.';
	// call the service to get product data.
	productService.getProducts().then(function(products){
		$scope.products = products.data;
	}, function(){
		console.log('error in fetching data from service.');
	});
  });
