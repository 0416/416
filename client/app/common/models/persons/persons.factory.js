(function() {

  'use strict';

  angular
    .module('0416App')
    .factory('Persons', Persons);

  function Persons(Restangular) {
    var model = Restangular.all('persons');
    model.one = function(id) {
      return Restangular.one('persons', id);
    };

    return model;
  }

})();