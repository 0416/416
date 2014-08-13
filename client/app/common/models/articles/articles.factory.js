(function() {

  'use strict';

  angular
    .module('0416App')
    .factory('Articles', Articles);

  function Articles(Restangular) {
    var model = Restangular.all('articles');
    model.one = function(id) {
      return Restangular.one('articles', id);
    };

    return model;
  }

})();