(function() {

  'use strict';

  angular
    .module('0416App')
    .directive('event', EventDrtv);

  function EventDrtv() {
    return {
      templateUrl: 'app/common/directives/event/event.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();