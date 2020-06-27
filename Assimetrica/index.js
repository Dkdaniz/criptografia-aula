const keys = require('./generateKeys');
const cypher = require("./cypher");

execute = async () => {

const text = "MY TEXT";
  
const { publicKey, privateKey } = await keys.generate();

console.log("THIS PUBLIC KEY\n\n");
console.log(publicKey);
console.log("\n\nTHIS PUBLIC KEY\n\n");
  
console.log("THIS PRIVATE KEY\n\n");
console.log(privateKey);
console.log("\n\nTHIS privateKey KEY\n\n");


const encrypted = await cypher.encrypt(publicKey, text);
console.log("THIS ENCRYPTED\n\n")
console.log(encrypted);
console.log("\n\nTHIS ENCRYPTED\n\n");

const decrypted = await cypher.decrypt(privateKey, encrypted);
console.log("THIS DECRYPTED\n\n");
console.log(decrypted);
console.log("\n\nTHIS DECRYPTED\n\n");

}

execute();