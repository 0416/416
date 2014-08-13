(function() {

  'use strict';

  angular
    .module('0416App')
    .directive('person', PersonDrtv);

  function PersonDrtv() {
    return {
      templateUrl: 'app/common/directives/person/person.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();