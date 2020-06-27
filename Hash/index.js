const crypto = require('crypto');

execute = async () => {
  var hash = crypto.createHash("sha256");

  var message = JSON.stringify([
    [
      {
        from: 'skaoskaoskasasa',
        to: 'soajsoajsiajsiasj',
        amount: 8000,
        status: 'pendente',
        date: '01/06/2020'
      },
      {
        hash: '3c30af23f53529a5d32621acd64be572c4eb8749b3957baa7d531351b697517e'
      },
      { blockiD: 'eece25f3fc30626c765f7dbd4080e36210bc0b041c0cb14380c12fab0d10c8c' }],
    [
      {
        from: 'skaoskaoskasasa',
        to: 'soajsoajsiajsiasj',
        amount: 9000,
        status: 'pendente',
        date: '01/06/2020'
      },
      {
        hash: '3c30af23f53529a5d32621acd64be572c4eb8749b3957baa7d531351b697517e'
      },
      { blockiD: '5918c6b2ebd7971816f28fac40d48b42f568bb4b67539907ce0a24506ec016c3' },
      { blockiDBefore: 'eece25f3fac30626c765f7dbd4080e36210bc0b041c0cb14380c12fab0d10c8c' }],
    [
      {
        from: 'skaoskaoskasasa',
        to: 'soajsoajsiajsiasj',
        amount: 9000,
        status: 'pendente',
        date: '01/06/2020'
      },
      {
        hash: '3c30af23f53529a5d32621acd64be572c4eb8749b3957baa7d531351b697517e'
      },
      { blockiD: '9a519979f99f81c803695d8f75454dd4ab2337af7c842550582f8c4c391f346f' },
      { blockiDBefore: '5918c6b2ebd7971816f28fac40d48b42f568bb4b67539907ce0a24506ec016c3' }],
    ],
  );

  //informacao valida ela se da pela formula matematica 
  // formula => (n/2 + 1) = Consenso.
  // n = poder computacional
  // n / 2 = 50% + 1;

 





  
  // blockId: '7786fd0990216022b20380e721cd0546efd445feac1bbec1c3512e876dc4ed30' }
  // blockiD: 'fd35b632cbe3c8377eacb67e2f1a6c9d67e80489c4a28cb599f11af8ed0b159d'

  let messageHash = hash.update(message);
  messageHash = hash.digest(message);

  console.log({ message: message, hash: messageHash.toString('hex')});
}

execute()
