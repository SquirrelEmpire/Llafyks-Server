var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var log = [];

app.get('/', function (req,res) {
  console.log('user connected via web lol');
});

io.on('connection', function (socket) {
  io.emit('log', log);
  socket.on('chatMessage', function (data) {
    console.log(data);
    io.emit('chatMessage', data);
    log.push(data);
  });

  socket.on('newUser', function (data) {
    users.push(data);
    console.log('New user joined name: '+data.username+' id: '+data.id);
  });
});

http.listen(3000, function () {
  console.log('Server running');
});
