import React, { useState } from 'react';
import Button from "./Button";
import UserWidget from "./UserWidget";
import LogoSvg from '../assets/logo.svg';
import { connectToWeb3, getAccountDetails } from '../helpers/web3';

class Nav extends React.Component {
  handleButtonClick = async () => {
    await connectToWeb3().then(async () => {
      const id = await getAccountDetails();
      this.props.setAccountId(id);
    });
  }

  render() {
    const isLoggedIn = this.props.accountId !== null;
    return (
      <nav className="bg-black h-70 flex items-center justify-between fixed top-0 left-0 w-full px-30">
        <a href="#">
          <img src={LogoSvg} alt=""/>
        </a>
        <div>
          {isLoggedIn
            ? <UserWidget accountId={this.props.accountId} disconnectAccount={ this.props.disconnectAccount }/>
            : <Button label="Engage Walet" type="yellow-hollow" action={ this.handleButtonClick } />
          }
        </div>
      </nav>
    );
  }
};

Nav.defaultProps = {
  setAccountId: () => {},
  disconnectAccount: () => {},
  accountId: null
}

export default Nav;
