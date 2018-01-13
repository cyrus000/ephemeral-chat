module.exports = {
  client: [
    { name: 'cipher', alias: 'c', type: String, defaultValue: 'aes256' },
    { name: 'inputEncode', alias: 'i', type: String, defaultValue: 'ascii' },
    { name: 'outputEncode', alias: 'o', type: String, defaultValue: 'hex' },
    { name: 'host', alias: 'h', type: String, defaultValue: 'localhost' },
    { name: 'port', alias: 'p', type: Number, defaultValue: 8080 },
    { name: 'name', alias: 'n', type: String, defaultValue: 'unknown' },
    { name: 'password', alias: 'k', type: String, defaultValue: 'unknown' },
  ],
  server: {
    port: 8080
  }
};