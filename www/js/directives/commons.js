/// <reference path="../../../typings/tsd.d.ts"/>

angular.module('directiveModule',[])

.directive('textareaAuto', function ($timeout) {
    return {
     restrict: 'A',
     link: function(scope, element, attr) {
         console.log(element[0].nodeName)
             //判断是否是    TEXTAREA
       if("TEXTAREA"==element[0].nodeName&&attr.textareaAuto){
         //自适应高度
                 $(element).autoTextarea()
           }
         }
    };
})