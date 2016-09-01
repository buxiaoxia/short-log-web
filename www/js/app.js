// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ngCookies','ShortLogsServiceModule', 'ngResource', 'ionic', 'ionic-material', 'ionMdInput','HomeModule', 'SignInUpModule', 'shortLog.services','ToastModule','CurrentUserModule','directiveModule','AddLogModule','configure']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('signin', {
            url: '/signin',
            // abstract: true,
            templateUrl: 'templates/signin.html',
            controller: 'SignInCtrl'
        })

        .state('signup', {
            url: '/signup',
            // abstract: true,
            templateUrl: 'templates/signup.html',
            controller: 'SignUpCtrl'
        })

        .state('app.lists', {
            url: '/lists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/lists.html',
                    controller: 'ListsCtrl'
                }
            }
        })

        .state('app.ink', {
            url: '/ink',
            views: {
                'menuContent': {
                    templateUrl: 'templates/ink.html',
                    controller: 'InkCtrl'
                }
            }
        })

        .state('app.motion', {
            url: '/motion',
            views: {
                'menuContent': {
                    templateUrl: 'templates/motion.html',
                    controller: 'MotionCtrl'
                }
            }
        })

        .state('app.components', {
            url: '/components',
            views: {
                'menuContent': {
                    templateUrl: 'templates/components.html',
                    controller: 'ComponentsCtrl'
                }
            }
        })

        .state('app.extensions', {
            url: '/extensions',
            views: {
                'menuContent': {
                    templateUrl: 'templates/extensions.html',
                    controller: 'ExtensionsCtrl'
                }
            }
        })

        .state('app.home', {
            url: '/home',
            cache:'false',        //不缓存页面，每次页面都会重新加载一次。性能上会有消耗
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl',
                    onEnter:function($scope){
                        $scope.load();
                    }
                }
            }
        })

        ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('app/home');
    //允许跨域请求
    $httpProvider.defaults.useXDomain = true;
    //删除用于识别ajax调用的XMLHttpRequests头，防止拦截CORS
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $httpProvider.interceptors.push(['$q', '$location','$window', function ($q, $location,$window) {
        console.log('auth.................');
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.user_id) {
                    config.headers.AuthUser = $window.sessionStorage.user_id;
                }
                return config;
            },
            'responseError': function (response) {
                console.log('responseError');
                console.log(response);
                if (response.status === 401 || response.status === 403) {
                    console.log('reidrect...........');
                    $location.path('/signin');
                }
                return $q.reject(response);
            }

        }
    }]);


});
