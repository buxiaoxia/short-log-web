app.controller('AvatarViewCtrl', function ($scope, $ionicActionSheet, CurrentUser) {

    // Triggered on a button click, or some other target
    $scope.selectPic = function () {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                // text: '<b>相册</b>'
                text: '相册'
            }, {
                    text: '拍照'
                }],
            //destructiveText: 'Delete',
            titleText: '选择图片',
            cancelText: '取消',
            cancel: function () {
                // add cancel code..
            },
            buttonClicked: function (index) {
                navigator.camera.getPicture(cameraSuccess, cameraError, {
                    sourceType: index
                }); //调用系统相册、拍照
                return true;
            }
        });

    };

})