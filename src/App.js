import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addRemider() {
    this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul>
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id}>
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <h1>React Redux App</h1>
        <form>
          <input
            placeholder="Enter text"
            onChange={event => this.setState({text: event.target.value})}
          />
          <button
            type="button"
            onClick={() => this.addRemider()}
          >
            Button
          </button>
        </form>
        { this.renderReminders() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);
