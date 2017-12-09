/* Notes */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './find-artisan.scss';
import PanelTransTrigger from '../../components/PanelTransTrigger/PanelTransTrigger.js';

function FindArtisan({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <div className={s.btnBar}>
            <button className={s.btn1, s.btnText} type="button">All</button>
            <button className={s.btn2, s.btnText} type="button">Caterers &amp; Cooks</button>
            <button className={s.btn3, s.btnText} type="button">Hair Stylist &amp; Sellers</button>
            <button className={s.btn4, s.btnText} type="button">Tailors</button>
            <button className={s.btn5, s.btnText} type="button">Housekeepers</button>
            <button className={s.btn6, s.btnText} type="button">Electricians</button>
        </div>
        <div className={s.bizCatTitle}>
          <h2>Business Category Title</h2>
        </div>
        <div className={s.bizPanel}>
          <h3>Company Name</h3>
          <h4>Description</h4>
          <h5>Address</h5>
        </div>
        <div className={s.bizPanel}>
          <h3>Company Name</h3>
          <h4>Description</h4>
          <h5>Address</h5>
        </div>
        <div className={s.bizPanel}>
          <h3>Company Name</h3>
          <h4>Description</h4>
          <h5>Address</h5>
        </div>
      </div>
    </div>
  );
}

FindArtisan.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(FindArtisan, s);
