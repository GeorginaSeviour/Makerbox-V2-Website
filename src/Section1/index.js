import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Section1(props) {
  return (
    <div className={styles.backgroundImage}>
      <h1>
        Makerbox 
      </h1>
    </div>
  );
}


Section1.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Section1;
