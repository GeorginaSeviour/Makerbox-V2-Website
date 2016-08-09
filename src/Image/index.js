import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Image(props) {
  return (
    <div
      className={classNames(styles.wrapper,
        {[props.className]: props.className})}
      onClick={props.onClick}
      >
      <img
        src={props.imageUrl}
        />
    </div>
  );
}


Image.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Image;
