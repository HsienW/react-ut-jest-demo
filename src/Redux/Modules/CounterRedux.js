import {createAction} from 'redux-actions';

export const CounterActions = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
};

const doIncrement = () => {
    return (dispatch) => {
        dispatch(createAction(CounterActions.increment)());
    };
};

const doDecrement = () => {
    return (dispatch) => {
        dispatch(createAction(CounterActions.decrement)());
    };
};

export const CounterActionsCreator = {
    doIncrement,
    doDecrement
};

export default function CounterReducer(state = {action: ''}, action) {
    switch (action.type) {
        case CounterActions.increment:
        case CounterActions.decrement:
            return {action: action.type};

        default:
            return state;
    }
}
