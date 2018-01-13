const app = require('http').createServer();
const io = require('socket.io')(app);
const fs = require('fs');
const config = require('./etc/config');
const User = require('./lib/user');
const clients = new Map();


app.listen(config.server.port);

io.on('connection', function (socket) {
  const state = User.getUserId();
  clients.set(state, socket);


  socket.on('disconnect', function () {
    clients.delete(state);
  });

  socket.on('chat', function (chat) {
    User.emitAll(clients, 'chat', chat);
  });
});