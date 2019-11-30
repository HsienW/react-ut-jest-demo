import {createAction} from 'redux-actions';

let getHomeSimulation = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        setTimeout(() => {
            resolve('success');
        }, 1000);
    } else {
        reject('error');
    }
});


export const HomeActions = {
    getHomeStart: 'GET_HOME_START',
    getHomeSuccess: 'GET_HOME_SUCCESS',
    getHomeFailed: 'GET_HOME_FAILED',
};

const getHomeData = () => {
    return (dispatch) => {
        dispatch(createAction(HomeActions.getHomeStart)());
        getHomeSimulation
            .then((respond) => {
                dispatch(createAction(HomeActions.getHomeSuccess)(respond));
            })
            .catch((error) => {
                dispatch(createAction(HomeActions.getHomeFailed)(error));
            });
    };
};

export const HomeActionsCreator = {
    getHomeData,
};

export default function HomeReducer(state = {action: ''}, action) {
    switch (action.type) {
        case HomeActions.getHomeSuccess:
        case HomeActions.getHomeFailed:
            return {action: action};

        default:
            return state;
    }
}

