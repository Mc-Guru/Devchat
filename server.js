const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});