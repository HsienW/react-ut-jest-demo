import {createAction} from 'redux-actions';

let getAuthSimulation = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        setTimeout(() => {
            resolve('success');
        }, 1000);
    } else {
        reject('error');
    }
});

export const AuthActions = {
    getAuthStart: 'GET_AUTH_START',
    getAuthSuccess: 'GET_AUTH_SUCCESS',
    getAuthFailed: 'GET_AUTH_FAILED',
};

const getAuth = () => {
    return (dispatch) => {
        dispatch(createAction(AuthActions.getAuthStart)());
        getAuthSimulation
            .then((respond) => {
                dispatch(createAction(AuthActions.getAuthSuccess)(respond));
            })
            .catch((error) => {
                dispatch(createAction(AuthActions.getAuthFailed)(error));
            });
    };
};

export const AuthActionsCreator = {
    getAuth,
};

export default function AuthReducer(state = {action: ''}, action) {
    switch (action.type) {
        case AuthActions.getAuthSuccess:
        case AuthActions.getAuthFailed:
            return {action: action.type};

        default:
            return state;
    }
}

