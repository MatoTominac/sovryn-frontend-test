var Web3 = require('web3')

export async function connectToWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .catch((error) => {
        if (error.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}

export async function getAccountDetails() {
  var accountId = null;
  await window.web3.eth.getAccounts((error, result) => {
    if (error) {
      console.log(error);
      accountId = null;
    } else {
      accountId = result[0];
    }
  });
  return accountId;
}

export function shortId(id) {
  return id.substr(2,4) + '....' + id.substr(-4);
}