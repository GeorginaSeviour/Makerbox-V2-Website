import React from 'react';
import {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import classNames from 'classnames';
import styles from './styles.css';

function Section1(props) {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.logo}>
        Makerbox
      </h1>
      <div
        className={styles.buttonContainer}
        >
        <Button
          bsSize={'large'}
          className={styles.playButton}
          >
          {'Play'}
        </Button>

        <span className={styles.slogan}>
          {'Let´s revolutionize the way engineering and problem solving is experienced.'}
        </span>

      </div>
    </div>
  );
}


Section1.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Section1;
