"use strict";
var express=require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
})

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on("disconnect", function() {
        console.log("a user go out");
    });

    socket.on("message", function(obj) {
        io.emit("message", obj);
    });

});

var server = http.listen(8899, function() {
    console.log('start at port:' + server.address().port);
});