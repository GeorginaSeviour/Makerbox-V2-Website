import React from 'react';
import styles from './App.css';

import Image from '../src/Image';
import Section1 from '../src/Section1';

export default class App extends React.Component {

  handleImageClick() {
    console.log('You have clicked the image!!');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Image
          imageUrl={'https://s-media-cache-ak0.pinimg.com/564x/b5/b4/ac/b5b4ac05185581180a2e27bb66fddf54.jpg'}
          onClick={this.handleImageClick}
          />
          {/*<Section1 />*/}
      </div>
    );
  }
}
