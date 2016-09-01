/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('SignInUpModule', [])

    .controller('SignInCtrl', ['$scope', '$http', '$location','$window', 'LoadingProgressService', 'PopupService','CurrentUser','services', function ($scope, $http, $location, $window,LoadingProgressService, PopupService,CurrentUser,services) {

        $scope.login = function () {
            LoadingProgressService.show();
            var data = {
                username: $scope.login.username,
                password: $scope.login.password
            }

            $http.post(services.sigin, data).success(function (res,x,s,d) {
                LoadingProgressService.hide();
                $window.localStorage.setItem('user',JSON.stringify(res.user));
                $window.sessionStorage.setItem('user_id',res.user._id);
                CurrentUser.login(res.user);
                $location.path('/app/home');
            }).error(function (error) {
                LoadingProgressService.hide();
                console.error(error)
                PopupService.alertPopup('登录失败', error.message);
            });
        }
    }])

    .controller('SignUpCtrl', ['$scope', '$ionicLoading', '$q', '$http', '$location', 'LoadingProgressService','PopupService', function ($scope, $ionicLoading, $q, $http, $location, LoadingProgressService,PopupService) {

        $scope.register = function () {
            LoadingProgressService.show();
            // var deferred = $q.defer();
            var data = {
                username: $scope.register.username,
                email: $scope.register.email,
                password: $scope.register.password,
                re_password: $scope.register.re_password
            }
            $http.post(services.sigup, data).success(function (res) {
                LoadingProgressService.hide();
                PopupService.alertPopup('提示', res.message);
                $scope.register = {};
                $location.path('/signin.html');
            }).error(function (error) {
                LoadingProgressService.hide();
                console.log(error)
                PopupService.alertPopup('注册失败', error.message);
            });

        }
    }])





