(function () {

  'use strict';

  angular
    .module('0416App')
    .config(Config);

  function Config($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register/:type',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      });
  }
  
})();