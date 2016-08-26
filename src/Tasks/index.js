import React from 'react';
import {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Modal, Image} from 'react-bootstrap';
import EasyTimer from 'easytimer';
import Timer from '../Timer';
import styles from './styles.css';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: 0,
      taskType: null
    };
    this.close = this.close.bind(this);
    this.openLight = this.openLight.bind(this);
    this.openBridge = this.openBridge.bind(this);
  }

  /*getInitialState() {
    return { showModal: false };
  }*/

  close() {
    this.setState({ showModal: false });
  }

  openLight() {
    this.setState({ showModal: true });
    this.setState({modalId: this.props.taskGroup});
    this.setState({taskType: 'light'});
  }

  openBridge() {
    this.setState({ showModal: true });
    this.setState({modalId: this.props.taskGroup});
    this.setState({taskType: 'bridge'})
  }

  renderTasks() {
    const randomNumber = this.props.taskGroup;
    //const randomNumber = 2;
    console.log('task Num', randomNumber);



    if (randomNumber === 1) {
      return (
        <div
          className={styles.style_wrapper}
          >
          <div
            className={styles.text_only_lommelykt}
            onClick={this.openLight}
            />
          <div
            className={styles.text_only_papirbro}
            onClick={this.openBridge}
            />
        </div>
      )
    } else if (randomNumber === 2) {
      return (
        <div
            className={styles.style_wrapper}
            >
          <div
            className={styles.illustration_lommelykt}
            onClick={this.openLight}
            />
          <div
            className={styles.illustration_papirbro}
            onClick={this.openBridge}
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
            className={styles.photo_lommelykt}
            onClick={this.openLight}
            />
          <div
            className={styles.photo_papirbro}
            onClick={this.openBridge}
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

  renderModalContents() {
    if (this.state.modalId === 1) {
      if (this.state.taskType === 'light') {
        return (
          <div
            className={styles.text_only_lommelykt_modal}>
          </div>
        );
      } else {
        return (
          <div
            className={styles.text_only_papirbro_modal}>
          </div>
        );
      }
    } else if (this.state.modalId === 2) {
      if (this.state.taskType === 'light') {
        return (
          <div
            className={styles.illustration_lommelykt_modal}>
          </div>
        );
      } else {
        return (
          <div
            className={styles.illustration_papirbro_modal}>
          </div>
        );
      }
    } else if (this.state.modalId === 3) {
      if (this.state.taskType === 'light') {
        return (
          <div
            className={styles.photo_lommelykt_modal}>
          </div>
        );
      } else {
        return (
          <div
            className={styles.photo_papirbro_modal}>
          </div>
        );
      }
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <div className={styles.timerWrapper}>
          <Timer/>
        </div>
        {/*<div id="chronoExample">
          <div class="values">00:00:00</div>
          <div>
            <button
              class="startButton"
              onClick={this.openLight}
              >
              Start
            </button>
            <button
              class="pauseButton"
              onClick={this.openLight}
              >
              Pause
            </button>
            <button
              class="stopButton"
              onClick={this.openLight}
              >
              Stop
            </button>
          </div>
        </div>*/}
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

          <Modal show={this.state.showModal} onHide={this.close}  dialogClassName={styles.modal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {this.renderModalContents()}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Finished</Button>
          </Modal.Footer>
        </Modal>

      </div>
  );
  }
}

Tasks.propTypes = {
  taskGroup: PropTypes.number
};

export default Tasks;
