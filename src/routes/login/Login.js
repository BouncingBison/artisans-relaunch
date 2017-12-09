/* this is a change */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Welcome Back!</h1>
        <form className={s.loginForm}>
          <label className={s.usrname}>Username</label>
          <input className={s.usrnameBox} type="text" placeholder="Enter Username" name="username" required />
          <label className={s.pssword}>Password</label>
          <input className={s.psswordBox} type="password" placeholder="Enter Password" name="password" required />
          <button className={s.sbmit} type="submit">Login</button>
          <span className={s.psw}>Forgot <a href="#">password?</a></span>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Login, s);
