/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('ShortLogsServiceModule', [])
    .factory('ShortLog', function ($resource) {
        return $resource('/shortLogs' , { _id: '@id' }, {
            update: {
                method: "PUT",
                params: {}
            }
        })
    })