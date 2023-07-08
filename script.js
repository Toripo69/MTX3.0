document.getElementById('createNFTButton').addEventListener('click', createNFT);

function createNFT() {
  const Web3 = require('web3');
  const web3 = new Web3('https://goerli.infura.io/v3/db6b9d5b5e1843c99e29505181bd0fd1');

  const contractABI = [ /* Voeg hier de ABI van het MyNFT-contract toe */ ];
  const contractAddress = '0x...'; // Voeg hier het adres van het MyNFT-contract toe

  const myNFT = new web3.eth.Contract(contractABI, contractAddress);

  const name = 'My NFT';
  const description = 'Beschrijving van mijn NFT';
  const imageURI = 'https://ipfs.io/ipfs/bafkreibc6v55x2d3mrwsya63uvvoyakdf3nafkfjuyuekvsnhecjchrso4';
  const attributes = ['Attribute 1', 'Attribute 2'];

  myNFT.methods.createNFT(web3.eth.defaultAccount, name, description, imageURI, attributes)
    .send({ from: web3.eth.defaultAccount })
    .then((receipt) => {
      console.log('Transactie geslaagd:', receipt);
    })
    .catch((error) => {
      console.error('Fout bij het verzenden van de transactie:', error);
    });
}
