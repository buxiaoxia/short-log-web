/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('CurrentUserModule', [])
    .factory('CurrentUser', function () {
        var current_user = {};
        current_user.login = function (user) {
            if (user) {
                current_user.user = user;
                if (current_user.scope) {
                    current_user.scope.loginData = user;
                }
            }
        }
        current_user.setScope = function (scope) {
            current_user.scope = scope;
        }
        return current_user;
    })