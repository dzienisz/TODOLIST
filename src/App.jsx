import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addReminder, deleteReminder, clearReminders } from './actions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: '',
        };
    }

    addRemider() {
        console.log('this.state.dueDate', this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul>
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id}>
                                <div>
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
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
                        onChange={event => this.setState({ text: event.target.value })}
                    />
                    <input
                        type="datetime-local"
                        onChange={event => this.setState({dueDate: event.target.value})}
                    />
                    <button
                        type="button"
                        onClick={() => this.addRemider()}
                    >
                        Button
                    </button>
                </form>
                {this.renderReminders()}
                <div
                    onClick={() => this.props.clearReminders()}
                >
                    Clear Reminders
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
