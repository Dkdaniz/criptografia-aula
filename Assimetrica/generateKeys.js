const crypto = require("crypto");

const passphrase = "mySecret";

class GenerateKeys { 
  async generate() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      namedCurve: "secp256k1",
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: passphrase,
      },
    });

    return { privateKey, publicKey };
  }
}

module.exports = new GenerateKeys();





// const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
//   namedCurve: "sect239k1",
//   modulusLength: 4096,
//   publicKeyEncoding: {
//     type: "spki",
//     format: "pem",
//   },
//   privateKeyEncoding: {
//     type: "pkcs8",
//     format: "pem",
//   },
// });

// console.log(privateKey);
// console.log(publicKey);

// const sign = crypto.createSign("SHA256");
// sign.write("financialhub2020");
// sign.end();

// const signature = sign.sign(privateKey, "hex");
// console.log("use this signature in AUTH_JWT_PRIVATE_KEY on .env");
// console.log(signature);

// // const verify = crypto.createVerify("SHA256");
// // verify.write("some data to sign");
// // verify.end();
// // console.log(verify.verify(publicKey, signature, "hex"));

