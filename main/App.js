import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import styles from './App.css';

import Image from '../src/Image';
import Section1 from '../src/Section1';
import TaskId from '../src/TaskId';

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
    const NotFound = () => (
      <h1>{'404.. This page is not found!'}</h1>)

    return (
      <div className={styles.wrapper}>
        <Router history={hashHistory}>
          <Route path='/' component={Section1} />
          <Route path='/tasks' component={TaskId} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>

      /*<div className={styles.wrapper}>
        <Section1 />
        <Tasks
          taskGroup={this.getTaskGroup()}
          />
      </div>*/
    );
  }
}
