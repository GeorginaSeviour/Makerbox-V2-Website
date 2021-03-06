import {Link} from 'react-router';
import React from 'react';
import {PropTypes} from 'react';
import {Button, Modal} from 'react-bootstrap';
import classNames from 'classnames';
import styles from './styles.css';
//import file from 'file-system';


class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  writeData() {
    /*fs = require('fs');
    fs.writeFile('test.txt', 'Hello World!', function (err) {
          if (err)
              return console.log(err);
      console.log('Hello World > helloworld.txt');
    });*/
    console.log('mahhh!');
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        <div className={styles.backgroundImage}>
          <div className={styles.containerr}>
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
              Team name: <input type="text" name="TeamName" required/><br/>
            <h5>{"Person 1"}</h5>
              <form action="">
                <input type="radio" name="gender" value="male" required/> Male<br/>
                <input type="radio" name="gender" value="female"/> Female
                <input className={styles.ageForm} type="number" name="age" required/> Age<br/>
              </form>
              <br/>
              <h5>{"Person 2"}</h5>
              <form action="">
                <input type="radio" name="gender" value="male"required/> Male<br/>
                <input type="radio" name="gender" value="female"/> Female
                <input className={styles.ageForm} type="number" name="age" required/> Age<br/>
              </form>
              <br/>
              <h5>{"Person 3"}</h5>
              <form action="">
                <input type="radio" name="gender" value="male"required/> Male<br/>
                <input type="radio" name="gender" value="female"/> Female
                <input className={styles.ageForm} type="number" name="age" required/> Age<br/>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Link to='/tasks'>
                <Button
                  bsSize={'large'}
                  className={styles.playButton}
                  onClick={this.close}
                  >
                  {'Play'}
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>

        </div>
        <div className={styles.section2Image} />
        <div className={styles.section3Image} />
        <div className={styles.section4Image} />
      </div>
    );
  }
}


Section1.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Section1;
