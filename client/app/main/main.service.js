(function() {

  'use strict';

  angular
    .module('0416App')
    .service('MainSvc', MainSvc);

  function MainSvc($q, Events, Persons, Articles) {
    this.getEvents = getEvents; 
    this.getPersons = getPersons;
    this.getArticles = getArticles;
    this.getAll = getAll;


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

    function getAll() {
      return $q.all([
          Events.getList(),
          Persons.getList(),
          Articles.getList()]);
    }

  }

})();