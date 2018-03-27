import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../const';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate,
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id,
    }
    console.log('delete in action', action);
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS,
    }
    return action;
}