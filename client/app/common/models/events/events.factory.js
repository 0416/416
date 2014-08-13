(function() {

  'use strict';

  angular
    .module('0416App')
    .factory('Events', Events);

  function Events(Restangular) {
    var model = Restangular.all('events');
    model.one = function(id) {
      return Restangular.one('events', id);
    };

    return model;
  }

})();