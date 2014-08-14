(function () {

  'use strict';

  angular
    .module('0416App')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $http, $stateParams, socket, MainSvc) {
    var vm = $scope.vm = {};
    vm.type = $stateParams.type;
    
    console.log('type:', vm.type);

    init(); 
    
    function init() {
      
      if( vm.type === 'event') {
        MainSvc.getEvents()
          .then(function(events) {
            vm.events = events;
          });
      }else if( vm.type === 'person') {
        MainSvc.getPersons()
          .then(function(persons) {
            console.log('getPersons..');
            
            vm.persons = persons;
          });
      }else if( vm.type === 'article') {
        MainSvc.getArticles()
          .then(function(articles) {
            console.log('getArticles..');
            
            vm.articles = articles;
          });
      }else {
        MainSvc.getAll()
          .then(function(response){
            vm.events = response[0];
            vm.persons = response[1];
            vm.articles = response[2];
          });
      }
    }
    
    
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  }

})();