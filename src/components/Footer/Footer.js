/* Notes x */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  getFullYear() {
    return new Date().getFullYear();
  }

  render() {
    const fullYear = this.getFullYear();
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>&copy; {fullYear} Artisans</span>
        </div>
      </div>
    );
  }
}

export default withStyles(Footer, s);
