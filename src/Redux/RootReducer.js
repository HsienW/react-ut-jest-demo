import {combineReducers} from 'redux';
import CounterReducer from '../Redux/Modules/CounterRedux';

const RootReducer = combineReducers({
    CounterReducer,
});

export default RootReducer;
