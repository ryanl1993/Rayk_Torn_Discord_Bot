const settings = require('./settings.json');

module.exports = {

  arrayOfKeys: settings.tornKeys,

  getRandomApi: () => {
    return this.arrayOfKeys[Math.floor(Math.random() * this.arrayOfKeys.length)]
  }

}
