import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import {connectToWeb3, getAccountDetails} from './helpers/web3';
import SendWidget from "./components/SendWidget";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: null
    }
  }

  componentDidMount = async () => {
    await connectToWeb3().then(async () => {
      const id = await getAccountDetails();
      this.setAccountId(id);
    });
  }

  disconnectAccount = async () => {
    // await window.ethereum.request({
    //   method: "wallet_requestPermissions",
    //   params: [
    //     {
    //       eth_accounts: {}
    //     }
    //   ]
    // }).then(() => { this.setAccountId(null) });
    alert('Disconnect');
    this.setAccountId(null);
  }

  setAccountId = (id) => {
    this.setState((state) => {
      return {
        accountId: id
      }
    })
  }

  render() {
    return (
      <div>
        <Nav accountId={this.state.accountId} setAccountId={this.setAccountId} disconnectAccount={this.disconnectAccount} />
        <div className="pt-110">
          <SendWidget />
        </div>
      </div>
    );
  }
};

export default App;
