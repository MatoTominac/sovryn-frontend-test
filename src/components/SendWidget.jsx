import React from 'react';
import RethSvg from '../assets/reth.svg';
import WenusSvg from '../assets/weenus.svg';

class SendWidget extends React.Component {
  render = () => {
    return (
      <div className="bg-black mx-auto rounded-30 border border-gray-light px-40 pt-30 pb-50 w-400 max-w-full text-white">
        <h1 className="uppercase font-extrabold text-center text-4xl leading-10">Send</h1>

        <label htmlFor="reth-radio">Asset:</label>
        <div className="flex">
          <div className="radio-button">
            <input type="radio" id="reth-radio" name="currency" />
            <label htmlFor="reth-radio">
              <img src={RethSvg} alt="rETH"/>
              rETH
            </label>
          </div>
          <div className="radio-button">
            <input type="radio" id="weenus-radio" name="currency" />
            <label htmlFor="weenus-radio">
              <img src={WenusSvg} alt="rETH"/>
              WEENUS
            </label>
          </div>
        </div>
      </div>
    );
  }
};

export default SendWidget;
