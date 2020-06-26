var crypto = require("crypto")

class GenarateSeed {
  async execute(secret, text){
    return crypto.createHmac("sha256", secret).update(text).digest("hex");
  }
}

module.exports = new GenarateSeed();

