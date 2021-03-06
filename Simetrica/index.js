const keys = require("./genarateSeed");
const cypher = require("./cypher");

execute = async () => {
  const hash = await keys.execute('daniel','marques');

  console.log("COPY THIS SEED\n\n");
  console.log(hash);
  console.log("\n\nCOPY THIS SEED\n\n");

  const text = 'CHAL PESSOAL';

  const encrypted = cypher.encrypt(hash, text);
  console.log("THIS ENCRYPTED\n\n");
  console.log({ message: encrypted, token: hash});
  console.log("\n\nTHIS ENCRYPTED\n\n");

  const decrypted = cypher.decrypt(hash, encrypted);
  console.log("THIS DECRYPTED\n\n");
  console.log(decrypted);
  console.log("\n\nTHIS DECRYPTED\n\n");
};

execute();
