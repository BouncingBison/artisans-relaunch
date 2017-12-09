/* Component of buttons that trigger the biz panels.
var categories = ["All", "Caterers & Cooks", "Hair Stylist & Sellers", "Tailors", "Housekeepers", "Electricians"];
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PanelTransTrigger.scss';
import Button from '../Button';

function PanelTransTrigger({ className }) {
  return (
    <Button buttonLabel="test" />
  );
}

PanelTransTrigger.propTypes = {
  className: PropTypes.string,
};

export default withStyles(PanelTransTrigger, s);
