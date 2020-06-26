var crypto = require("crypto")

const algorithm = "aes-256-ctr";
const ENCRYPTION_KEY = process.env.KEY_HASH || "";


class Crypto {
  encrypt(key, text) {

    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key, "hex"), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

 decrypt(key, text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(key, "hex"),
      iv
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
}

module.exports = new Crypto();