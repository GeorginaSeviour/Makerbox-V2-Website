import {Modal, Image} from 'react-bootstrap';
import React from 'react';
import {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import classNames from 'classnames';
import styles from './styles.css';

class Section1 extends React.Component {
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

  handlePlayClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className={styles.backgroundImage} >
        <div className={styles.container}>
          <h1 className={styles.logo}>
            Makerbox
          </h1>
          <div
            className={styles.buttonContainer}
            >
            <Button
              bsSize={'large'}
              className={styles.playButton}
              onClick={this.open}
              >
              {'Play'}
            </Button>

            <span className={styles.slogan}>
              {'Let´s revolutionize the way engineering and problem solving is experienced.'}
            </span>


          </div>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{"Enter your team details"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Team name: <input type="text" name="TeamName"/><br/>
          <h5>{"Person 1"}</h5>
            <form action="">
              <input type="radio" name="gender" value="male"/> Male<br/>
              <input type="radio" name="gender" value="female"/> Female<br/>
            </form>
            <br/>
            <h5>{"Person 2"}</h5>
            <form action="">
              <input type="radio" name="gender" value="male"/> Male<br/>
              <input type="radio" name="gender" value="female"/> Female<br/>
            </form>
            <br/>
            <h5>{"Person 3"}</h5>
            <form action="">
              <input type="radio" name="gender" value="male"/> Male<br/>
              <input type="radio" name="gender" value="female"/> Female<br/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>{"Submit"}</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}


Section1.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Section1;
