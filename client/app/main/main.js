(function () {

  'use strict';

  angular
    .module('0416App')
    .config(config);

  function config($stateProvider) { 
    $stateProvider
    .state('main', {
      url: '/:type',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });
  }

})();  