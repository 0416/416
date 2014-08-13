(function() {

  'use strict';

  angular
    .module('0416App')
    .directive('article', ArticleDrtv);

  function ArticleDrtv() {
    return {
      templateUrl: 'app/common/directives/article/article.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();