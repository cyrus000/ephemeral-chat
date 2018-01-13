const commandLineArgs = require('command-line-args');
const config = require('./etc/config');
const clientConfig = commandLineArgs(config.client);
const CryptoHelper = require('./lib/cryptoHelper');
const User = require('./lib/user');
const socket = require('socket.io-client')(`http://${clientConfig.host}:${clientConfig.port}`);
const stdin = process.openStdin();
const name  = clientConfig.name;

const output = clientConfig;
output.password = '***********';
console.log(output);

console.log(`Type a String and press enter to send a message`);
stdin.addListener('data', function(d) {
  const str = d.toString().trim();
  const payload = {name: name, msg: str};
  socket.emit('chat', CryptoHelper.encrypt(JSON.stringify(payload)));
});

socket.on('chat', function (data) {
  console.log(User.parseMsg(CryptoHelper.decrypt(data)));
});

socket.on('connect_error', (err) => {
  console.log(err)
});