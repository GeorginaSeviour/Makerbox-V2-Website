import React from 'react';
import Tasks from '../Tasks';

export default class TaskId extends React.Component {

  getTaskGroup() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  render() {
    return (
      <div>
        <Tasks
          taskGroup={this.getTaskGroup()}
          />
      </div>
    );
  }
}
