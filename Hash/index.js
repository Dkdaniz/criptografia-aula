const crypto = require('crypto');
const keys = require('../Assimetrica/generateKeys');

execute = async () => {
  var hash = crypto.createHash("sha256");

  var message = "bacon";

  let messageHash = hash.update(message);
  messageHash = hash.digest(message);

  console.log(messageHash.toString('hex'));
}

execute()
