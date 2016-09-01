angular.module('shortLog.services', [])
    .service('shortLogService', ['$http', '$q', 'LoadingProgressService', 'ShortLog', 'PopupService', function ($http, $q, LoadingProgressService, ShortLog, PopupService) {

        var shortLogsObject = {
            list: [],
            moredata: true
        }

        this.all = function (scope, lastLogCreateTime) {
            LoadingProgressService.show();
            var param = {}
            param.lastTime = lastLogCreateTime;
            param.test = 123;
            ShortLog.get(param, function (resp) {
                shortLogsObject.moredata = true;
                shortLogsObject.list = resp.shortLogs;
                LoadingProgressService.hide();
                scope.$broadcast('scroll.refreshComplete');
                scope.$broadcast('scroll.infiniteScrollComplete');
            }, function (err) {
                LoadingProgressService.hide();
                PopupService.alertPopup('加载失败', error.message);
                scope.$broadcast('scroll.refreshComplete');
                scope.$broadcast('scroll.infiniteScrollComplete');
            })
            return shortLogsObject;
        };
        this.remove = function (id) {
            shortLogs.splice(shortLogs.indexOf(id), 1);
        };
        this.get = function (id) {
            for (var i = 0; i < shortLogs.length; i++) {
                if (shortLogs[i].id === parseInt(id)) {
                    return shortLogs[i];
                }
            }
            return null;
        };
        this.add = function (log, scope) {
            LoadingProgressService.show();
            ShortLog.save({}, log, function (resp) {
                shortLogsObject.list.unshift(resp.shortLog);
                LoadingProgressService.hide();
                scope.modal.hide();
                scope.log.content = '';
            }, function (err) {
                LoadingProgressService.hide();
                PopupService.alertPopup('加载失败', error.message);
            })
        }

        this.loadMore = function (scope, lastLogCreateTime) {
            LoadingProgressService.show();
            var param = {}
            param.lastTime = lastLogCreateTime;
            ShortLog.get(param, function (resp) {
                if (resp.shortLogs.length == 0) {
                    shortLogsObject.moredata = false;
                }
                angular.forEach(resp.shortLogs, function (item, index) {
                    shortLogsObject.list.push(item);
                });
                LoadingProgressService.hide();
                scope.$broadcast('scroll.refreshComplete');
                scope.$broadcast('scroll.infiniteScrollComplete');
            }, function (err) {
                LoadingProgressService.hide();
                PopupService.alertPopup('加载失败', error.message);
                scope.$broadcast('scroll.refreshComplete');
                scope.$broadcast('scroll.infiniteScrollComplete');
            })
            return shortLogsObject;
        }
    }])