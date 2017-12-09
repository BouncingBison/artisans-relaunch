/* small change */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import cx from 'classnames';
import Link from '../../components/Link';

function Home({ news }) {
  return (
    <div className={s.root}>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>Artisans</h1>
        <p className={s.bannerDesc}>Facilitating a better contractor experience.</p>
      </div>
      <div className={s.container}>
        <div className={s.findButton}>
          <Link className={cx(s.link, s.highlight)} to="/find-artisan">Find an Artisan</Link>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
