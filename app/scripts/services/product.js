'use strict';

/* Services */

var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Strompris', ['$resource',
  function($resource) {
    return $resource('stromprodukter.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
]);
