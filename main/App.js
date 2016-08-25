import React from 'react';
import styles from './App.css';

import Image from '../src/Image';
import Section1 from '../src/Section1';
import Tasks from '../src/Tasks';

export default class App extends React.Component {

  handleImageClick() {
    console.log('You have clicked the image!!');
  }

  getTaskGroup() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Section1 />
        <Tasks
          taskGroup={this.getTaskGroup()}
          />
      </div>
    );
  }
}
