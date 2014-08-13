(function() {

  'use strict';

  angular
    .module('0416App')
    .service('MainSvc', MainSvc);

  function MainSvc(Events, Persons, Articles) {
    this.getEvents = getEvents; 
    this.getPersons = getPersons;
    this.getArticles = getArticles;


    ///
    function getEvents() {
      return Events.getList();
    }

    function getPersons() {
      return Persons.getList();
    }

    function getArticles() {
      return Articles.getList();
    }

  }

})();