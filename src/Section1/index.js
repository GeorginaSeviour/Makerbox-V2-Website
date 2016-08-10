import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Section1(props) {
  return (
    <div
      className={classNames(styles.wrapper,
        {[props.className]: props.className})}
        >
        <div className={styles.image} />
        <img
          className={styles.logo}
          src={'http://cdn.makezine.com/uploads/2013/01/mf_logo_rgb_tm.jpg'}
          />
          <span className={styles.playText}>
            {'Play'}
          </span>
          <span className={styles.subText}>
            {'Ideate.Make.Experiment.Learn'}
          </span>
          <span className={styles.revText}>
            {'Let´s revolutionise the way engineering and problem solving is experienced'}
          </span>
    </div>
  );
}


Section1.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Section1;
