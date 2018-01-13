class User {

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static getUserId() {
    return new Date().getTime() + ':' + User.getRandomInt(1000)
  }

  static parseMsg(data) {
    try{
      const payload = JSON.parse(data);
      return `${payload.name}: ${payload.msg}`
    } catch (e) {
      return data;
    }
  }

  static emitAll(clients, channel, message) {
    clients.forEach((value, key) => {
      value.emit(channel, message);
    })
  }
}

module.exports = User;