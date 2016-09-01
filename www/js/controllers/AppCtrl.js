app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $window, CurrentUser) {
    // Form data for the login modal
    $scope.loginData = {};


    if (!CurrentUser.user) {
        CurrentUser.login(JSON.parse($window.localStorage.getItem("user")));
    }
    if (CurrentUser.user) {
        $scope.loginData.username = CurrentUser.user.username;
        $scope.loginData.avatar = CurrentUser.user.avatar;
    } else CurrentUser.setScope($scope);


    $ionicModal.fromTemplateUrl('templates/avatarView.html', {
        scope: $scope,
        animation: 'animated zoomIn'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.avatarView = function () {
        console.log('头像点击');
        $scope.modal.show();

    }

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
        '   <ion-header-bar>' +
        '       <h1 class="title">My Popover Title</h1>' +
        '   </ion-header-bar>' +
        '   <ion-content class="padding">' +
        '       My Popover Contents' +
        '   </ion-content>' +
        '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});