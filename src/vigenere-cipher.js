const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
constructor (isDirect) {
  this.isDirect = isDirect;
}

  encrypt(message, key) {
    if (!message || !key) throw new Error ('error');
    
  }    
  decrypt(message, key) {
    if (!message || !key) throw new Error ('error');
  }
}

module.exports = VigenereCipheringMachine;
