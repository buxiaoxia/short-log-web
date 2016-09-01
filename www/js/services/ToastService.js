angular.module('ToastModule', [])
    .factory('LoadingProgressService', function ($ionicLoading) {
        return {
            show: function () {
                $ionicLoading.show({
                    template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
                })
            },
            hide: function () {
                $ionicLoading.hide();
            }
        }
    })

    .factory('PopupService', function ($ionicPopup) {
        return {
            alertPopup: function (title, context) {
                $ionicPopup.alert({
                    title: title,
                    template: context
                })
            }
        }
    })
