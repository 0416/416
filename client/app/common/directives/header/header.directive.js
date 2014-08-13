(function() {

  'use strict';

  angular
    .module('0416App')
    .directive('header', HeaderDrtv);

  function HeaderDrtv($location) {

    return {
      templateUrl: 'app/common/directives/header/header.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.activeMenu = getActiveMenu();

        function getActiveMenu(current) {

          if($location.path() === '/person' || $location.path() === '/register/person') {
            return 'person';
          }
          if($location.path() === '/event' || $location.path() === '/register/event') {
            return 'event';
          }
          if($location.path() === '/article' || $location.path() === '/register/article') {
            return 'article';
          }

          
        }

      }
    };
  }

})();