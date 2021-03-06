/*  */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

function Navigation({ className }) {
  return (
  <div className={cx(s.root, className)} role="navigation">
    <div className={s.homeNav}>
        <img src={require('./Artisan_Logo.gif')} width="30" height="30" alt="Artisan logo" />
        <Link className={s.brand} to="/">
          <span className={s.brandTxt}>Artisans</span>
        </Link>
    </div>
    <div className={s.logInSignIn}>
      <Link className={s.link} to="/login">Log in</Link>
      <span className={s.spacer}> or </span>
      <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
    </div>
  </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
