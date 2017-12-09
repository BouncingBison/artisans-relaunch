/** Notes */

import React, { Component, PropTypes } from 'react';
import s from './Button.scss';

class Button extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  handleClick = (event) => {

  };

  render() {
    return <button type="button" className={s.button} onClick={this.handleClick}>{this.props.buttonLabel}</button>;
  }

}

export default Button;
