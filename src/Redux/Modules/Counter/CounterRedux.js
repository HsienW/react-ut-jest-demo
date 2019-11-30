import {createAction} from 'redux-actions';

export const CounterActions = {
    addCounter: 'ADD_COUNTER',
};

const addNumber = () => {
    return (dispatch) => {
        dispatch(createAction(CounterActions.addCounter)(
            {
                type: CounterActions.addCounter,
                payload: {number: 1,},
            }
        ));
    };
};

export const CounterActionsCreator = {
    addNumber,
};

export default function CounterReducer(state = {action: ''}, action) {
    switch (action.type) {
        case CounterActions.addCounter:
            return {...state, count: state.count + 1};

        default:
            return state;
    }
}
