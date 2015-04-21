'use strict';

/**
 * @ngdoc function
 * @name mysupermarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mysupermarketApp
 */
angular.module('mysupermarketApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
