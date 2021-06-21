import React from 'react';
import LogoutSvg from '../assets/logout.svg';
import { shortId } from '../helpers/web3'

class UserWidget extends React.Component {
  render() {
    return (
      <div className="w-174 flex justify-between items-center bg-gray h-40 rounded-10 flex-grow-0 flex-shrink-0">
        <div className="text-gray-xlight font-semibold text-center text-sm flex-grow">{ shortId(this.props.accountId) }</div>
        <div className="w-22 h-22 rounded-30 bg-yellow mr-10 flex-shrink-0 flex-grow-0"></div>
        <a href="#" className="w-40 h-40 bg-gray-light flex items-center justify-center rounded-tr-10 rounded-br-10" onClick={ this.props.disconnectAccount }>
          <img src={LogoutSvg} alt="Log Out"/>
        </a>
      </div>
    );
  }
}

UserWidget.defaultProps = {
  logOut: () => { console.log('null') },
  disconnectAccount: () => {},
  accountId: ''
}

export default UserWidget;
