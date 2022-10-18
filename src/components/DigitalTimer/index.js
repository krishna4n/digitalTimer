// Write your code here
import {Component} from 'react'
import './index.css'

class Timer extends Component {
  state = {timer: 25.0, inputValue: 25}

  componentDidMount() {
    console.log('component mounted')
  }

  componentWillUnmount() {
    console.log('component unmounted')
  }

  onReset = () => {
    console.log('on Reset')
    this.componentWillUnmount()
  }

  changeTimer = () => {
    console.log('change Timer')
  }

  render() {
    const {timer} = this.state
    return (
      <div className="container">
        <h1>Digital Meter</h1>
        <ul className="card-container">
          <div className="timer-image">
            <div className="time-count-bg">
              <p className="timer">{timer}</p>
              <p className="timer-status">Paused</p>
            </div>
          </div>
          <ul className="timer-controls">
            <li className="start-reset-container">
              <button type="button" className="start-container button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play-icon"
                  className="icon"
                />
                <p>Pause</p>
              </button>

              <button
                type="button"
                className="reset-container button"
                onClick={this.onReset}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset-icon"
                  className="icon"
                />

                <p>Reset</p>
              </button>
            </li>
            <li className="limit-controls">
              <p>Set Timer Limit</p>
              <div className="limit-container">
                <button type="button" className="button">
                  <p className="limit"> -</p>
                </button>
                <input
                  type="text"
                  className="limit limit-number"
                  value={inputValue}
                  onChange={this.changeTimer}
                />
                <button type="button" className="button">
                  <p className="limit">+</p>
                </button>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default Timer
