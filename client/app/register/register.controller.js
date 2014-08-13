(function() {

  'use strict';

  angular
    .module('0416App')
    .controller('RegisterCtrl', RegisterCtrl);

  function RegisterCtrl($scope, $log, $state, $stateParams, RegisterSvc) {
    
    var register = $scope.register = {
      type: $stateParams.type,
      onSubmit: onSubmit
    };


    function onSubmit(model, type) {
      
      RegisterSvc
        .register(model, type)
        .then(onSubmitSuccess)
        .catch(onSubmitFail);

    }



    function onSubmitSuccess(response) {
      console.log(response);
      
      $state.go('main', {type: register.type});
    }

    function onSubmitFail(error) {
      console.log('error..', error);
      alert('이미지 사이즈가 너무 큽니다. ');
    }
  }

})();
