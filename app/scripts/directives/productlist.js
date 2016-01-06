'use strict';

/**
 * @ngdoc directive
 * @name sampleApp.directive:productList
 * @description
 * # productList
 */
angular.module('sampleApp')
  .directive('productList', function () {
    return {
      templateUrl: 'views/productList.html',
      restrict: 'E',
	  scope: {
		products:'='
	  },
      link: function postLink(scope, element, attrs) {
		
      }
    };
  });
