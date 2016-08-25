import React from 'react';
import {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import styles from './styles.css';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  /*getInitialState() {
    return { showModal: false };
  }*/

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  renderTasks() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(randomNumber);



    if (randomNumber === 1) {
      return (
        <div
          className={styles.style_wrapper}
          >
          <div
            className={styles.text_only_lommelykt}
            onClick={this.open}
            />
          <div
            className={styles.text_only_papirbro}
            onClick={this.open}
            />
        </div>
      )
    } else if (randomNumber === 2) {
      return (
        <div
            className={styles.style_wrapper}
            >
          <div
            className={styles.text_only_lommelykt}
            onClick={this.open}
            />
          <div
            className={styles.text_only_papirbro}
            onClick={this.open}
            />
          {/*<span
            src={styles.photo_lommelykt}
            />
          <span
            src={styles.photo_papirbro}
            />*/}
        </div>
      )
    } else if (randomNumber === 3) {
      return (
        <div
            className={styles.style_wrapper}
            >
          <div
            className={styles.text_only_lommelykt}
            onClick={this.open}
            />
          <div
            className={styles.text_only_papirbro}
            onClick={this.open}
            />
          {/*<img
            src={'./photo_lommelykt.png'}
            />
          <img
            src={'./photo_lommelykt.png'}
            />*/}
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <div className={styles.tasksWrapper}>
          {this.renderTasks()}
        </div>
        <div
          className={styles.buttonContainer}
          >
          <Button
            bsSize={'large'}
            className={styles.finishButton}
            >
            {'Finished'}
          </Button>
        </div>

          <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
  );
  }
}

export default Tasks;
