// http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
// http://exploringjs.com/es6/ch_classes.html
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';


class Timer extends React.Component {

    constructor(props) {
        super(props);

        //: getInitialState() method
        this.state = {
            minutes: 0,
            seconds: 0,
            millis: 0,
            totalTime: 0,
            showModal: false
        };

        this._handleStartClick = this._handleStartClick.bind(this);
        this._handleStopClick = this._handleStopClick.bind(this);
        this._handleResetClick = this._handleResetClick.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    _handleResetClick(event) {
        this.running = false;
        this.update(0, 0, 0);
    }

    _handleStartClick(event) {
        var _this = this;
        if (!this.running) {
            this.interval = setInterval(() => {
                this.tick();
                //let sec = this.state.seconds + 1;
                //_this.updated(0, sec, 0);
            }, 100);

            this.running = true;
        }
    }

    showFinalModal() {
      console.log('stateTimeModal', this.state.totalTime);
      this.setState({ showModal: true });
    }

    _handleStopClick(event) {
        this.running = false;

        const finalTime = `${this.zeroPad(this.state.minutes)}:${this.zeroPad(this.state.seconds)}`;
        console.log(finalTime);
        this.setState({totalTime: finalTime});
        console.log('state', this.state.totalTime);
        this.showFinalModal()
    }

    close() {
      this.setState({ showModal: false });
    }

    open() {
    }
    
    tick() {
        let millis = this.state.millis + 1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (millis === 10) {
            millis = 0;
            seconds = seconds + 1;
        }

        if (seconds === 60) {
            millis = 0;
            seconds = 0;
            minutes = minutes + 1;
        }

        this.update(millis, seconds, minutes);
    }

    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }

    update(millis, seconds, minutes) {
        this.setState({
            millis: millis,
            seconds: seconds,
            minutes: minutes
        });
    }

    componentDidMount() {
        this.running = false;
    }

    componentWillUnMount() {
        if (this.running) {
            this.running = false;
        }
    }

    get running() {
        return this._running;
    }

    set running(value) {

        this._running = value;

        if (true === value) {
            // Enabled or disable the buttons
            this.refs.btnStart.classList.add('disabled');
            this.refs.btnStart.classList.add('selected');
            //this.refs.btnReset.classList.add('disabled');
            this.refs.btnStop.classList.remove('disabled');

        } else {
            clearInterval(this.interval);
            // Enabled or disable the buttons
            this.refs.btnStart.classList.remove('disabled');
            this.refs.btnStart.classList.remove('selected');
            //this.refs.btnReset.classList.remove('disabled');
            this.refs.btnStop.classList.add('disabled');
        }
    }

    render() {
        return (
            <div className="app">
                <main className="main">
                    <output className={styles.output}>
                        {this.zeroPad(this.state.minutes)}:
                        {this.zeroPad(this.state.seconds)} .
                        <span className="small">0{this.state.millis}</span>
                    </output>
                </main>
                <footer className="footer">
                    <button ref="btnStart"
                        className="btn start"
                        onClick={this._handleStartClick}>Start</button>

                        <button ref="btnStop"
                            className="btn stop disabled"
                            onClick={this._handleStopClick}>Finished</button>
                      {/*<button ref="btnReset"
                        className="btn reset disabled"
                        onClick={this._handleResetClick}>Reset</button>*/}
                </footer>

                <Modal show={this.state.showModal} onHide={this.close}  dialogClassName={styles.modal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <div className={styles.modalWrapper}>
                    {'Congratulations! You have completed the tasks in '}
                    {this.state.totalTime}
                  </div>

                </Modal.Body>
                <Modal.Footer>
                  <Link to='/'>
                    <Button onClick={this.close}>Completed Exercise</Button>
                  </Link>
                </Modal.Footer>
              </Modal>

            </div>);
    }
}

export default Timer;

//var app = document.querySelector('#app');

//ReactDOM.render(<Timer ver="0.0.1"/>, app);
