/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('ShortLogsServiceModule', [])
    .factory('ShortLog', function ($resource,services) {
        return $resource(services.short_log , { _id: '@id' }, {
            update: {
                method: "PUT",
                params: {}
            }
        })
    })