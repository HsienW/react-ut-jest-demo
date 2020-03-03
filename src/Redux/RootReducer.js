import {combineReducers} from 'redux';
import CounterReducer from '../Redux/Modules/CounterRedux';
import ProductReducer from '../Redux/Modules/ProductRedux';

const RootReducer = combineReducers({
    CounterReducer,
    ProductReducer
});

export default RootReducer;
