'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:CreateEventCtrl
 * @description
 * # CreateEventCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('CreateEventCtrl', function ($scope, createEventService) {
    $scope.dateOptions = new Set();

    $scope.addPref = function (pref) {
      if (pref) {
        $scope.dateOptions.add(pref.format('DD-MM-YY h:mm a'));
        $scope.preference = undefined;
      }
    };

    $scope.delPref = function (pref) {
      if (pref) {
        $scope.dateOptions.delete(pref);
      }

    };

    $scope.getDateOptions = function () {
      return Array.from($scope.dateOptions);
    };

    $scope.createEvent = function () {
      var eventRequest = {
        'name': $scope.eventName,
        'description': $scope.description,
        'preferences': $scope.getDateOptions()
      };

      createEventService.createEvent(eventRequest);
    };

  });
