/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('AddLogModule', [])

    .controller('AddLogCtrl', ['$scope', 'shortLogService', function ($scope, shortLogService) {

        $scope.log = {
            content: ''
        }

        $scope.publish = function () {
            console.log($scope.log);
            //校验
            shortLogService.add($scope.log,$scope)
        }

        $scope.avatarChange = function(){
            
        }
    }])


