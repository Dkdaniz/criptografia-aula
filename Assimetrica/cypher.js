const crypto = require('crypto');
const passphrase = "mySecret"

class Cypher {

  encrypt = async(publicKey, text) => {
    const buffer = new Buffer.from(text);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
  };

  decrypt = async (privateKey, encrypt) => {
    const buffer = new Buffer.from(encrypt, "base64");
    //var decrypted = crypto.privateDecrypt(privateKey, buffer);
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey.toString(),
        passphrase: passphrase,
      },
      buffer
    );
    return decrypted.toString();
  };
}

module.exports = new Cypher();