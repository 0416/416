(function () {

  'use strict';

  angular
    .module('0416App')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $http, $stateParams, socket, MainSvc) {
    var vm = $scope.vm = {};
    vm.type = $stateParams.type;

    init(); 
    
    function init() {
      
      if( vm.type === 'event' || vm.type === 'all') {
        MainSvc.getEvents()
          .then(function(events) {
            vm.events = events;
          });
      }

      if( vm.type === 'person' || vm.type === 'all') {
        MainSvc.getPersons()
          .then(function(persons) {
            console.log('getPersons..');
            
            vm.persons = persons;
          });
      }

      if( vm.type === 'article' || vm.type === 'all') {
        MainSvc.getArticles()
          .then(function(articles) {
            console.log('getArticles..');
            
            vm.articles = articles;
          });
      }
    }
    
    
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  }

})();