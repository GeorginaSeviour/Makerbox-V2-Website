import React from 'react';
import {PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
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
        <div className={styles.tasksWrapper}>
          {this.renderTasks()}
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
