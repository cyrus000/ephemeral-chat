const crypto = require('crypto');
const commandLineArgs = require('command-line-args');
const config = require('../etc/config');
const clientConfig = commandLineArgs(config.client);

class CryptoHelper {
  static encrypt(str) {
    try {
      const cipher = crypto.createCipher(clientConfig.cipher, clientConfig.password);
      let encrypted = cipher.update(str, clientConfig.inputEncode, clientConfig.outputEncode);
      encrypted += cipher.final(clientConfig.outputEncode);
      return encrypted;
    } catch (e) {
      return str
    }
  }

  static decrypt(str) {
    try {
      const decipher = crypto.createDecipher(clientConfig.cipher, clientConfig.password);
      let decrypted = decipher.update(str, clientConfig.outputEncode, clientConfig.inputEncode);
      decrypted += decipher.final(clientConfig.inputEncode);
      return decrypted;
    } catch (e) {
      return str
    }
  }
}

module.exports = CryptoHelper;