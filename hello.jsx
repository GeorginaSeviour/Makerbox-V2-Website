import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  countUsers() {
    return 7;
  }

  render() {
    return <h1>{`Hi there are ${this.countUsers()} users`}</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
