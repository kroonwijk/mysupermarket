'use strict';

/**
 * @ngdoc function
 * @name mysupermarketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mysupermarketApp
 */
angular.module('mysupermarketApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
