import { ADD_REMINDER } from '../const';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text: text
    }
    console.log('action in addReminder', action);
    return action;
}