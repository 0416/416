(function() {

  'use strict';

  angular
    .module('0416App')
    .service('FileuploadSvc', FileuploadSvc);

  function FileuploadSvc($timeout, $q) {
    
    this.onFileSelect = onFileSelect;

    
    /// 
    var fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    function onFileSelect ($files, scope) {
      var selectedFile = $files[0];
      if (fileReaderSupported && selectedFile.type.indexOf('image') > -1) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);
        var loadFile = function(fileReader, index) {
          fileReader.onload = function(e) {
            var tempImg = new Image();
            tempImg.src = e.target.result;

            tempImg.onload = function() {
 
                var MAX_WIDTH = 400;
                var MAX_HEIGHT = 300;
                var tempW = tempImg.width;
                var tempH = tempImg.height;
                if (tempW > tempH) {
                    if (tempW > MAX_WIDTH) {
                       tempH *= MAX_WIDTH / tempW;
                       tempW = MAX_WIDTH;
                    }
                } else {
                    if (tempH > MAX_HEIGHT) {
                       tempW *= MAX_HEIGHT / tempH;
                       tempH = MAX_HEIGHT;
                    }
                }
         
                var canvas = document.createElement('canvas');
                canvas.width = tempW;
                canvas.height = tempH;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(this, 0, 0, tempW, tempH);

                $timeout(function() {
                  scope.model.photo = canvas.toDataURL("image/png");
                });
                // scope.$apply(scope.model);
            }
          }
        }(fileReader);
      }
    };

  }
})();