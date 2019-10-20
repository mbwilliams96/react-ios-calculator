import React from 'react';
import Proptypes from 'prop-types';
import './Display.css';

export default class Display extends React.Component {
  static propTypes = {
    value: Proptypes.string,
  };

  render(){
    return(
      <div className='component-display'>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
