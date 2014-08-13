(function() {

  'use strict';

  angular
    .module('0416App')
    .directive('register', RegisterDrtv);

  function RegisterDrtv(FileuploadSvc) {

    return {
      templateUrl: 'app/common/directives/register/register.html',
      scope: {
        type: '@',
        onSubmit: '&'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {

        scope.labels = {};
        scope.model = {};
        scope.submitted = false;
        scope.selectedFile = null;
        scope.submit = submit;
        scope.inputFileTrigger = inputFileTrigger;
        scope.onFileSelect = onFileSelect;

        initLabels(scope);

        
        function initLabels() {
          if(scope.type==='event') {
            scope.labels = {
              title: '이벤트 제목을 입력해 주세요.',
              description: '설명을 작성해 주세요.',
              date: '이벤트 발생 시점을 선택해주세요.'
            }
          };
          if(scope.type==='person') {
            scope.labels = {
              title: '이름을 입력해 주세요.',
              description: '설명을 작성해 주세요.',
              date: '탄생 연도를 선택해 주세요.'
            }
          }
          if(scope.type==='article') {
            scope.labels = {
              title: '기사의 제목을 입력해 주세요.',
              description: '설명을 작성해 주세요.',
              date: '기사 작성 연일를 선택해 주세요.'
            }
          }
        };

        function submit(form) {
          scope.submitted = true;
          if(form.$valid) {
            scope.onSubmit({model: scope.model});
          }
        };

        function inputFileTrigger() {
          $('#file-upload').trigger('click');
        };

        function onFileSelect($files) {
          FileuploadSvc.onFileSelect($files, scope);
        }
      }
    };
  }

})();