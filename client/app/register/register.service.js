(function() {

  'use strict';

  angular
    .module('0416App')
    .service('RegisterSvc', RegisterSvc);

  function RegisterSvc(Events, Persons, Articles) {
    this.register = register;

    function register(model, type) {

      if(model.photo) {
        
      }

      if(type === 'event') {
        return Events.post(model);
      }else if(type === 'person') {
        return Persons.post(model);
      }else if(type ==='article') {
        return Articles.post(model);
      }

    };
  }

})();