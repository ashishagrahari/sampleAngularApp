'use strict';

/**
 * @ngdoc service
 * @name sampleApp.productService
 * @description
 * # productService
 * Service in the sampleApp.
 */
angular.module('sampleApp')
  .service('productService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	this.getProducts = function(){
		// return promise
		return $http.get('data/products.json');
	};
	
  });
