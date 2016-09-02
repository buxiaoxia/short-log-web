/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('HomeModule', ['ngCookies'])
    .controller('homeCtrl', ['$scope', '$ionicModal', '$timeout', 'shortLogService', '$location', '$cookies', '$cookieStore', '$window', 'CurrentUser', function ($scope, $ionicModal, $timeout, shortLogService, $location, $cookies, $cookieStore, $window, CurrentUser) {
        $scope.shortLogs = {};
        $scope.shortLogs.moredata = true;
        $scope.load = function () {
            $scope.shortLogs = shortLogService.all($scope);
        }

        $scope.load();


        $scope.openModal = function () {
            $scope.modal.show();
        };

        $ionicModal.fromTemplateUrl('templates/add-log.html', {
            scope: $scope,
            focusFirstInput: true,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.doRefresh = function () {
            $scope.shortLogs = shortLogService.all($scope);
        };

        $scope.loadMore = function () {
            // 获取最早一条 
            var tmp = $scope.shortLogs.list[$scope.shortLogs.list.length-1];
            var time = null;
            if(tmp){
                time = tmp.create_at;
            }
            $scope.shortLogs = shortLogService.loadMore($scope, time);
        }
    }])
