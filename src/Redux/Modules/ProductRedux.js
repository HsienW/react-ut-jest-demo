import {createAction} from 'redux-actions';

export const ProductActions = {
    getProductSuccess: 'GET_PRODUCT_SUCCESS',
    getProductFail: 'GET_PRODUCT_FAIL',
};

const productSuccess = () => {
    return (dispatch) => {
        dispatch(createAction(ProductActions.getProductSuccess)());
    };
};

const productFail = () => {
    return (dispatch) => {
        dispatch(createAction(ProductActions.getProductFail)());
    };
};

export const ProductActionsCreator = {
    productSuccess,
    productFail
};

export default function ProductReducer(state = {action: ''}, action) {
    console.log(action);
    switch (action.type) {
        case ProductActions.getProductSuccess:
        case ProductActions.getProductFail:
            return {action: action.type};

        default:
            return state;
    }
}
