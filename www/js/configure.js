// customer_care_service_api_ist = {
//         'customer_uri':'/api/v1.0/customers/:id',
//         'customer_owner_uri':'/api/v1.0/customers/:customer_id/owners/:user_id',
//         'schedule_uri':'/api/v1.0/schedules/:id',
//         'schedule_log_uri':'/api/v1.0/schedules/:schedule_id/logs/:log_id',
//         'customer_period':'/api/v1.0/care/careperiod/:id',
//         'mylocation_show_uri':'/api/v1.0/users/:user_id/logs?type=location&date=:date&range=:range',
//         'myGrpLocation_show_uri':'/api/v1.0/group/:grp_id/logs?type=location&date=:date&range=:range'
// }

// sys_params = {
//         'range_max':{
//             'five_max':100,
//             'four_max':100,
//             'three_max':100,
//             'two_max':100,
//             'one_max':100
//         },
//         'sys_period':{
//             'five_star':5,
//             'four_star':10,
//             'three_star':15,
//             'two_star':20,
//             'one_star':30
//         }
// }

// oauth_params = {
//     baseUrl: 'https://dev.jyx365.top',
//     clientId: 'customer_care_web_server_guj',
//     clientSecret: '654322',
//     grantPath: '/oauth/access_token',
//     revokePath: '/oauth/revoke',
//     userPath: '/api/v1.0/users/current'
// }



/// <reference path="../../typings/tsd.d.ts"/>

short_log_service = {
    short_log :'http://127.0.0.1:9001/api/v1.0/shortLogs/:id',
    sigin : 'http://127.0.0.1:9001/api/v1.0/signin',
    sigup : 'http://127.0.0.1:9001/api/v1.0/signup',
}


angular.module("configure",[])
    // .constant('web_servers',web_servers)
    // .constant('services',angular.extend({},other_services,customer_care_service_api_ist))
    // .constant('sys_params',sys_params)
    // .constant('oauth_params',oauth_params)
    .constant('services',short_log_service)



