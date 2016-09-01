var express = require('express');

var shortLogCtrl = {
    all:function(req,res){
       var shortLogs = [
            {
                'name': '夏葳',
                'take': '我很帅是不是！',
                'pic': '',
                'context': '我只是很无聊'
            },
            {
                'name': '倪好',
                'take': '我很美是不是！',
                'pic': '/img/arya.jpg',
                'context': '我只是很无聊'
            },
            {
                'name': '探险家',
                'take': '我很酷是不是！',
                'pic': '/img/tyrion.jpg',
                'context': '我只是很无聊'
            }
        ];
        res.send(shortLogs);
    },
    add:function(req,res){

    },
    update:function(req,res){

    },
    del:function(req,res){

    }

}


module.exports = shortLogCtrl;





