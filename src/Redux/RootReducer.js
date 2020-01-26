import {combineReducers} from 'redux';
import CounterReducer from '../Redux/Modules/Counter/CounterRedux';

const RootReducer = combineReducers({
    CounterReducer,
});

export default RootReducer;
