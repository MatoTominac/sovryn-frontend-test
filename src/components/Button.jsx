import React from 'react';

class Button extends React.Component {
  render() {
    return (
        <button onClick={ this.props.action } className={'border border-yellow rounded w-174 text-base' + typeClasses(this.props.type) + heightClasses(this.props.height)}>{ this.props.label }</button>
    );
  }
}

Button.defaultProps = {
  label: '',
  action: () => { console.log('null') },
  type: 'yellow',
  height: 'm'
}

const typeClasses = (type) => {
  switch (type) {
    case 'yellow-hollow':
      return ' bg-yellow bg-opacity-5 text-yellow font-medium';
    default:
      return ' bg-yellow text-black font-semiBold'
  }
}

const heightClasses = (height) => {
  switch (height) {
    case 'l':
      return ' h-50';
    default:
      return ' h-40'
  }
}

export default Button;
