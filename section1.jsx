import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'Section1/styles.css';

class Section1 extends React.Component {

  render() {
    return
        <div className={styles.wrapper}>
            <b className={styles.text}>{'show on background'}</b>
        </div>
  }
}

ReactDOM.render(<Section1/>, document.getElementById('section1'));
