'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.service:createEventService
 * @description
 * # createEventService
 * Service of the eventPlannerApp
 */

var createEventService = angular.module('createEventService', [])
    .service('createEventService', function () {
        this.createEvent = function(eventDetails) {
            console.log(angular.toJson(eventDetails));
        };
    });